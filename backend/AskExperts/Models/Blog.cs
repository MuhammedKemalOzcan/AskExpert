namespace AskExperts.Models
{
    public class Blog
    {
        public int Id { get; set; }
        public string Cover { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }
        public DateTime PublishedDate { get; set; } = DateTime.UtcNow;
        public Member? Member { get; set; }
        public int MemberId { get; set; }
        
    }
}
