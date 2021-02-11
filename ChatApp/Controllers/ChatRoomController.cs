using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ChatApp.Data;
using ChatApp.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatRoomController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ChatRoomController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            Console.WriteLine("Starting Chat Server...");
        }

        [HttpGet]
        public async Task<ActionResult<IList<ChatRoom>>> Get()
        {
            Console.WriteLine("Getting all Chatrooms");
            return await _dbContext.ChatRoom
                .AsSplitQuery()
                .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ChatRoom>> Get(int id)
        {
            Console.WriteLine("Getting chatroom");
            return await _dbContext.ChatRoom
                .FirstAsync(c => c.Id == id);
        }

        [HttpPost]
        public async Task<ActionResult<ChatRoom>> Post([FromBody] ChatRoom chatRoom)
        {
            Console.WriteLine("Creating chatroom");
            await _dbContext.ChatRoom.AddAsync(chatRoom);
            await _dbContext.SaveChangesAsync();
            return Ok(chatRoom);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] ChatRoom chatRoom)
        {
            if (id != chatRoom.Id) return BadRequest();
            _dbContext.Entry(chatRoom).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPatch("{id}")]
        public async Task<ActionResult<ChatRoom>> Patch(int id, [FromBody] JsonPatchDocument<ChatRoom> patchEntity)
        {
            Console.WriteLine("Patching chatroom");
            var chatRoom = await _dbContext.ChatRoom.FirstOrDefaultAsync(c => c.Id == id);
            if (chatRoom == null) return NoContent();

            patchEntity.ApplyTo(chatRoom, ModelState);

            if (!ModelState.IsValid) return new BadRequestObjectResult(ModelState);


            _dbContext.Update(chatRoom);
            await _dbContext.SaveChangesAsync();

            return Ok(chatRoom);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ChatRoom>> Delete(int id, [FromBody] int userId)
        {
            Console.WriteLine($"Deleting ChatRoom");
            var foundChatRoom = await _dbContext.ChatRoom.FirstOrDefaultAsync(c => c.Id == id && c.UserId == userId);
            if (foundChatRoom == null) return BadRequest();

            try
            {
                Console.WriteLine("Removing");
                _dbContext.ChatRoom.Remove(foundChatRoom);
                Console.WriteLine("Saving");
                await _dbContext.SaveChangesAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

            return Ok();
        }
    }
}