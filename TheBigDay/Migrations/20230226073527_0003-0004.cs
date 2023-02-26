using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheBigDay.Migrations
{
    public partial class _00030004 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PackageProducts_Product_ProductId",
                table: "PackageProducts");

            migrationBuilder.DropColumn(
                name: "ServiceID",
                table: "PackageProducts");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "PackageProducts",
                newName: "ProductID");

            migrationBuilder.RenameIndex(
                name: "IX_PackageProducts_ProductId",
                table: "PackageProducts",
                newName: "IX_PackageProducts_ProductID");

            migrationBuilder.AlterColumn<int>(
                name: "ProductID",
                table: "PackageProducts",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_PackageProducts_Product_ProductID",
                table: "PackageProducts",
                column: "ProductID",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PackageProducts_Product_ProductID",
                table: "PackageProducts");

            migrationBuilder.RenameColumn(
                name: "ProductID",
                table: "PackageProducts",
                newName: "ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_PackageProducts_ProductID",
                table: "PackageProducts",
                newName: "IX_PackageProducts_ProductId");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "PackageProducts",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ServiceID",
                table: "PackageProducts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_PackageProducts_Product_ProductId",
                table: "PackageProducts",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id");
        }
    }
}
