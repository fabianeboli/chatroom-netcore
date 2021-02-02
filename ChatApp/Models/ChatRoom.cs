using System.Collections;
using System.Collections.Generic;

namespace ChatApp.Models
{
    public class ChatRoom
    {
        public int Id { get; set; }
        public string name { get; set; }
        public IEnumerable<Message> Messages { get; set; }
        public IEnumerable<User> SubscribedUsers { get; set; }
    }
}