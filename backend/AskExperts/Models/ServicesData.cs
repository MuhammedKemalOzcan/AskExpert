namespace AskExperts.Models
{
    public class ServicesData
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }
        public string Header { get; set; }
        public string DetailContent { get; set; }
        public int ServicesId { get; set; }
        public Services? Services { get; set; }

    }
}
