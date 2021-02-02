using System.Collections;
using System.Collections.Generic;

namespace ChatApp.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public IEnumerable<ChatRoom> SubscribedChatRooms { get; set; }

        public User()
        {
            
        }
    }
    
    
}