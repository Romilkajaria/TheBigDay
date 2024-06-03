using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheBigDay.Migrations
{
    /// <inheritdoc />
    public partial class extrafields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EventCustomers_AspNetUsers_UserId",
                table: "EventCustomers");

            migrationBuilder.DropIndex(
                name: "IX_EventCustomers_UserId",
                table: "EventCustomers");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "EventCustomers");

            migrationBuilder.AlterColumn<string>(
                name: "CustomerId",
                table: "EventCustomers",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_EventCustomers_CustomerId",
                table: "EventCustomers",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_EventCustomers_AspNetUsers_CustomerId",
                table: "EventCustomers",
                column: "CustomerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EventCustomers_AspNetUsers_CustomerId",
                table: "EventCustomers");

            migrationBuilder.DropIndex(
                name: "IX_EventCustomers_CustomerId",
                table: "EventCustomers");

            migrationBuilder.AlterColumn<string>(
                name: "CustomerId",
                table: "EventCustomers",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "EventCustomers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EventCustomers_UserId",
                table: "EventCustomers",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_EventCustomers_AspNetUsers_UserId",
                table: "EventCustomers",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
