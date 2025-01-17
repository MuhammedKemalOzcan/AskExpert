using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AskExperts.Migrations
{
    /// <inheritdoc />
    public partial class Galleriesadditions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Cover",
                table: "Gallery",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cover",
                table: "Gallery");
        }
    }
}
