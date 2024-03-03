using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheBigDay.Migrations
{
    public partial class _00020003 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "EventTypesID",
                table: "Service",
                type: "uniqueidentifier",
                nullable: true);

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
    }
}
