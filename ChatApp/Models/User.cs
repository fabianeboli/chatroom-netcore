using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChatApp.Models
{
    public class User
    {
        [Key] public int Id { get; set; }

        [Required, MinLength(3), MaxLength(80)]
        public string Username { get; set; }

        [Required, MinLength(6), MaxLength(120)]
        public string Password { get; set; }

        [Required, MinLength(3), MaxLength(120), EmailAddress]
        public string Email { get; set; }

        public IEnumerable<ChatRoom> SubscribedChatRooms { get; set; } = new List<ChatRoom>();

        public User()
        {
        }

        public User(string username, string password, string email)
        {
            Username = username;
            Password = password;
            Email = email;
        }
    }
}