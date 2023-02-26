using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheBigDay.Migrations
{
    public partial class _00040005 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Event_EventTypes_typeId",
                table: "Event");

            migrationBuilder.RenameColumn(
                name: "typeId",
                table: "Event",
                newName: "TypeId");

            migrationBuilder.RenameIndex(
                name: "IX_Event_typeId",
                table: "Event",
                newName: "IX_Event_TypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Event_EventTypes_TypeId",
                table: "Event",
                column: "TypeId",
                principalTable: "EventTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Event_EventTypes_TypeId",
                table: "Event");

            migrationBuilder.RenameColumn(
                name: "TypeId",
                table: "Event",
                newName: "typeId");

            migrationBuilder.RenameIndex(
                name: "IX_Event_TypeId",
                table: "Event",
                newName: "IX_Event_typeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Event_EventTypes_typeId",
                table: "Event",
                column: "typeId",
                principalTable: "EventTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
