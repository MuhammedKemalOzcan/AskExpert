namespace AskExperts.Models
{
    public class Member
    {
        public int Id { get; set; }
        public string MemberImage { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string Name { get; set; }
        public string MemberDesc { get; set; }
        public string Experience { get; set; }
        public string Position { get; set; }
        public DateTime Creationdate { get; set; } = DateTime.UtcNow;

    }
}
