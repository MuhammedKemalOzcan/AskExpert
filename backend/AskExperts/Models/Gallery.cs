namespace AskExperts.Models
{
    public class Gallery
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }  // Bu, resim yolunu tutacak.
        public string Field { get; set; }
        public string Overview { get; set; }

        // Noktalar - Points
        public List<string> Points { get; set; } = new List<string>();

        // Storyboard - Başlık anlatımı
        public string Storyboard { get; set; }

        // Sonuç - Result
        public string Result { get; set; }
    }
}
