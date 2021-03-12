using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatApp.Models
{
    public class Message
    {
        [Key] public int Id { get; set; }
        [Required] public string Date { get; set; }
        [Required] public string Text { get; set; }
        [ForeignKey("User")] public int UserId { get; set; }

        [ForeignKey("ChatRoom")] public int ChatRoomId { get; set; }

        public Message()
        {
        }

        public Message(string date, string text, int userId, int chatRoomId)
        {
            Date = date;
            Text = text;
            UserId = userId;
            ChatRoomId = chatRoomId;
        }
    }
}