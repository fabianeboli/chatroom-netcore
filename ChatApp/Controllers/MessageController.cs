using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatApp.Data;
using ChatApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.Controllers
{
    // FIXME
    [ApiController]
    [Route("api/{chatRoomId}/[controller]")]
    public class MessageController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public MessageController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("{messageId}/{id}")]
        public async Task<List<IEnumerable<Message>>> Get(int id)
        {
            Console.WriteLine("");
            return await _dbContext.ChatRoom
                .Where(c => c.Id == id)
                .Select(c => c.Messages)
                .ToListAsync();
        }

        [HttpPost("{id}")]
        public async Task<ActionResult<Message>> Post(int id, Message message)
        {
            var foundChatRoom =
                await _dbContext.ChatRoom.FirstAsync(m => m.Id == id);

            if (foundChatRoom == null) return BadRequest();

            _dbContext.Message.Update(message);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }
    }
}