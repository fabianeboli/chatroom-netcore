using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ChatApp.Data;
using ChatApp.Models;
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
        public async Task<ActionResult<ChatRoom>> Post([FromBody] string name)
        {
            Console.WriteLine("Creating chatroom");
            var chatRoom = new ChatRoom(name);
            await _dbContext.ChatRoom.AddAsync(chatRoom);
            await _dbContext.SaveChangesAsync();
            return Ok(chatRoom);
        }

        [HttpPatch("{id}")]
        public async Task<ActionResult<ChatRoom>> Patch(int id, ChatRoom chatRoom)
        {
            var foundChatRoom = await _dbContext.ChatRoom.FirstAsync(c => c.Id == id);
            if (foundChatRoom == null) return NotFound();

            _dbContext.Entry(chatRoom).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException e)
            {
                Console.WriteLine(e);
                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ChatRoom>> Delete(int id)
        {
            Console.WriteLine("Deleting ChatRoom");
            var foundChatRoom = await _dbContext.ChatRoom.FirstAsync(c => c.Id == id);
            if (foundChatRoom == null) return NoContent();

            try
            {
                _dbContext.ChatRoom.Remove(foundChatRoom);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

            return NoContent();
        }
    }
}