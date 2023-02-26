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
                name: "FK_PackageProducts_Package_PackageId",
                table: "PackageProducts");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "PackageProducts");

            migrationBuilder.DropColumn(
                name: "Summary",
                table: "PackageProducts");

            migrationBuilder.RenameColumn(
                name: "PackageId",
                table: "PackageProducts",
                newName: "PackageID");

            migrationBuilder.RenameColumn(
                name: "TemperatureF",
                table: "PackageProducts",
                newName: "ServiceID");

            migrationBuilder.RenameColumn(
                name: "TemperatureC",
                table: "PackageProducts",
                newName: "MinGuestLimit");

            migrationBuilder.RenameIndex(
                name: "IX_PackageProducts_PackageId",
                table: "PackageProducts",
                newName: "IX_PackageProducts_PackageID");

            migrationBuilder.AlterColumn<int>(
                name: "PackageID",
                table: "PackageProducts",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MaxGuestLimit",
                table: "PackageProducts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_PackageProducts_Package_PackageID",
                table: "PackageProducts",
                column: "PackageID",
                principalTable: "Package",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PackageProducts_Package_PackageID",
                table: "PackageProducts");

            migrationBuilder.DropColumn(
                name: "MaxGuestLimit",
                table: "PackageProducts");

            migrationBuilder.RenameColumn(
                name: "PackageID",
                table: "PackageProducts",
                newName: "PackageId");

            migrationBuilder.RenameColumn(
                name: "ServiceID",
                table: "PackageProducts",
                newName: "TemperatureF");

            migrationBuilder.RenameColumn(
                name: "MinGuestLimit",
                table: "PackageProducts",
                newName: "TemperatureC");

            migrationBuilder.RenameIndex(
                name: "IX_PackageProducts_PackageID",
                table: "PackageProducts",
                newName: "IX_PackageProducts_PackageId");

            migrationBuilder.AlterColumn<int>(
                name: "PackageId",
                table: "PackageProducts",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "PackageProducts",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Summary",
                table: "PackageProducts",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_PackageProducts_Package_PackageId",
                table: "PackageProducts",
                column: "PackageId",
                principalTable: "Package",
                principalColumn: "Id");
        }
    }
}
