namespace AskExperts.Models
{
    public class BlogDetails
    {
        public int Id { get; set; }
        public string? Type { get; set; }
        public string? Content { get; set; } // Blog içeriği
        public Blog? Blog { get; set; }
        public int BlogId { get; set; }
    }
}
