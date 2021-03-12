using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ChatApp.Data;
using ChatApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace ChatApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IConfiguration _configuration;

        public UserController(ApplicationDbContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<IList<User>>> Get()
        {
            Console.WriteLine("Getting Users");
            return await _dbContext.User
                .Include(u => u.SubscribedChatRooms)
                .AsSplitQuery()
                .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Get(int id)
        {
            Console.WriteLine("Getting user");
            return await _dbContext.User
                .Include(u => u.SubscribedChatRooms)
                .FirstAsync(u => u.Id == id);
        }

        // Sign Up
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<User>> Post(User user)
        {
            Console.WriteLine("Creating User");

            var userExists = await _dbContext.User.FirstOrDefaultAsync(u => u.Email == user.Email);
            if (userExists != null) return BadRequest();

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(user.Password);

            var hashedUser = new User(user.Username, hashedPassword, user.Email);

            await _dbContext.User.AddAsync(hashedUser);
            await _dbContext.SaveChangesAsync();

            return Ok(user);
        }

        [HttpPatch("{id}")]
        public async Task<ActionResult<User>> Patch(int id, [FromBody] JsonPatchDocument<User> patchEntity)
        {
            var user = await _dbContext.User.FirstOrDefaultAsync(u => u.Id == id);
            if (user == null) return NotFound();

            patchEntity.ApplyTo(user, ModelState);
            await _dbContext.SaveChangesAsync();

            return Ok(user);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> Delete(int id)
        {
            var user = await _dbContext.User.FirstOrDefaultAsync(u => u.Id == id);
            if (user == null) return NotFound();

            _dbContext.User.Remove(user);
            await _dbContext.SaveChangesAsync();

            return Ok(user);
        }

        public record LoginData(string Email, string Password);

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginData login)
        {
            IActionResult response = Unauthorized();
            var foundUser =
                await _dbContext.User.FirstOrDefaultAsync(u => u.Email == login.Email);
            if (foundUser == null) return BadRequest();

            var user = await AuthenticateUser(login);
            if (user == null) return response;

            var tokenString = GenerateJsonWebToken(user);
            response = Ok(new
            {
                id = foundUser.Id,
                email = foundUser.Email,
                subscribedChatRooms = foundUser.SubscribedChatRooms,
                username = foundUser.Username,
                token = tokenString
            });

            return response;
        }

        private string GenerateJsonWebToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Username),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(240),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private async Task<User?> AuthenticateUser(LoginData user)
        {
            var foundUser = await _dbContext.User
                .FirstAsync(u => u.Email == user.Email);

            return BCrypt.Net.BCrypt.Verify(user.Password, foundUser.Password) ? foundUser : null;
        }
    }
}