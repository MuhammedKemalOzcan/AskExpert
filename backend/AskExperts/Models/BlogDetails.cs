namespace AskExperts.Models
{
    public class BlogDetails
    {
        public int Id { get; set; }
        public string Title { get; set; } // Blog başlığı
        public string Content { get; set; } // Blog içeriği
        public string ImageUrl { get; set; } // Blog görseli
        public string Quote { get; set; } // Alıntı metni (opsiyonel)
        public Blog Blog { get; set; }
        public int BlogId { get; set; }
    }
}
