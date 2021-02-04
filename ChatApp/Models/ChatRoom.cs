using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChatApp.Models
{
    public class ChatRoom
    {
        [Key] public int Id { get; set; }
        [Required, MinLength(3), MaxLength(32)] public string Name { get; set; }
        public IEnumerable<Message> Messages { get; set; }
        public IEnumerable<User> SubscribedUsers { get; set; }

        public ChatRoom()
        {
            
        }
    }
}