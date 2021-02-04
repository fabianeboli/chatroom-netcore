using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatApp.Models
{
    public class Message
    {
        [Key] public int Id { get; set; }
        [Required] public string Date { get; set; }
        [Required] public string Text { get; set; }
        [ForeignKey("User")] public string UserId { get; set; }

        public Message()
        {
        }
    }
}