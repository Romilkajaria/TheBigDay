using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheBigDay.Migrations
{
    /// <inheritdoc />
    public partial class paymentPreferences : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "DepositPercentage",
                table: "Store",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FullPaymentPrecedingEventDays",
                table: "Store",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DepositPercentage",
                table: "Store");

            migrationBuilder.DropColumn(
                name: "FullPaymentPrecedingEventDays",
                table: "Store");
        }
    }
}
