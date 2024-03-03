using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheBigDay.Migrations
{
    public partial class _00010002 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventTypesService");

            migrationBuilder.AddColumn<Guid>(
                name: "EventTypesID",
                table: "Service",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Service",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PriceType",
                table: "Service",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Service_EventTypesID",
                table: "Service",
                column: "EventTypesID");

            migrationBuilder.AddForeignKey(
                name: "FK_Service_EventTypes_EventTypesID",
                table: "Service",
                column: "EventTypesID",
                principalTable: "EventTypes",
                principalColumn: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Service_EventTypes_EventTypesID",
                table: "Service");

            migrationBuilder.DropIndex(
                name: "IX_Service_EventTypesID",
                table: "Service");

            migrationBuilder.DropColumn(
                name: "EventTypesID",
                table: "Service");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Service");

            migrationBuilder.DropColumn(
                name: "PriceType",
                table: "Service");

            migrationBuilder.CreateTable(
                name: "EventTypesService",
                columns: table => new
                {
                    ServicesID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TypeID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventTypesService", x => new { x.ServicesID, x.TypeID });
                    table.ForeignKey(
                        name: "FK_EventTypesService_EventTypes_TypeID",
                        column: x => x.TypeID,
                        principalTable: "EventTypes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EventTypesService_Service_ServicesID",
                        column: x => x.ServicesID,
                        principalTable: "Service",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EventTypesService_TypeID",
                table: "EventTypesService",
                column: "TypeID");
        }
    }
}
