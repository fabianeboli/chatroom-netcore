using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChatApp.Models
{
    public class ChatRoom
    {
        [Key] public int Id { get; set; }
        [Required, MinLength(3), MaxLength(32)] public string Name { get; set; }
        public IEnumerable<Message> Messages { get; set; } = new List<Message>();
        public IEnumerable<User> SubscribedUsers { get; set; } = new List<User>();

        public ChatRoom()
        {
            
        }

        public ChatRoom(string? name)
        {
            Name = name;
        }
    }
}