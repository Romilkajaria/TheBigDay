using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheBigDay.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PhotoPath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstNme = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AddressLine1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AddressLine2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Suburb = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Postcode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DOB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "EventTypes",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventTypes", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Vendor",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OperatingRadius = table.Column<int>(type: "int", nullable: false),
                    AddressLine1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AddressLine2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Suburb = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Postcode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactNum = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AfterHoursMobile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhotoPath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vendor", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartDateTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EndDateTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    allDay = table.Column<bool>(type: "bit", nullable: false),
                    IsPrivate = table.Column<bool>(type: "bit", nullable: false),
                    GuestListFinalised = table.Column<bool>(type: "bit", nullable: false),
                    TicketLink = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AddressLine1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AddressLine2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Suburb = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Postcode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TypeID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Event_EventTypes_TypeID",
                        column: x => x.TypeID,
                        principalTable: "EventTypes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Package",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MinGuestLimit = table.Column<int>(type: "int", nullable: false),
                    MaxGuestLimit = table.Column<int>(type: "int", nullable: false),
                    VendorID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Package", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Package_Vendor_VendorID",
                        column: x => x.VendorID,
                        principalTable: "Vendor",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MinGuestLimit = table.Column<int>(type: "int", nullable: false),
                    MaxGuestLimit = table.Column<int>(type: "int", nullable: false),
                    VendorID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Product_Vendor_VendorID",
                        column: x => x.VendorID,
                        principalTable: "Vendor",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Service",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MinGuestLimit = table.Column<int>(type: "int", nullable: false),
                    MaxGuestLimit = table.Column<int>(type: "int", nullable: false),
                    VendorID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Service", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Service_Vendor_VendorID",
                        column: x => x.VendorID,
                        principalTable: "Vendor",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EventCustomers",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CustomerID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EventID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsAdmin = table.Column<bool>(type: "bit", nullable: false),
                    IsCreator = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventCustomers", x => x.ID);
                    table.ForeignKey(
                        name: "FK_EventCustomers_Customer_CustomerID",
                        column: x => x.CustomerID,
                        principalTable: "Customer",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EventCustomers_Event_EventID",
                        column: x => x.EventID,
                        principalTable: "Event",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EventPackages",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EventID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PackageID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsFinalisedByCustomer = table.Column<bool>(type: "bit", nullable: false),
                    IsFinalisedByVendor = table.Column<bool>(type: "bit", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventPackages", x => x.ID);
                    table.ForeignKey(
                        name: "FK_EventPackages_Event_EventID",
                        column: x => x.EventID,
                        principalTable: "Event",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EventPackages_Package_PackageID",
                        column: x => x.PackageID,
                        principalTable: "Package",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EventTypesPackage",
                columns: table => new
                {
                    PackagesID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TypeID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventTypesPackage", x => new { x.PackagesID, x.TypeID });
                    table.ForeignKey(
                        name: "FK_EventTypesPackage_EventTypes_TypeID",
                        column: x => x.TypeID,
                        principalTable: "EventTypes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EventTypesPackage_Package_PackagesID",
                        column: x => x.PackagesID,
                        principalTable: "Package",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EventProduct",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EventID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsFinalisedByCustomer = table.Column<bool>(type: "bit", nullable: false),
                    IsFinalisedByVendor = table.Column<bool>(type: "bit", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventProduct", x => x.ID);
                    table.ForeignKey(
                        name: "FK_EventProduct_Event_EventID",
                        column: x => x.EventID,
                        principalTable: "Event",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EventProduct_Product_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Product",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EventTypesProduct",
                columns: table => new
                {
                    ProductsID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TypeID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventTypesProduct", x => new { x.ProductsID, x.TypeID });
                    table.ForeignKey(
                        name: "FK_EventTypesProduct_EventTypes_TypeID",
                        column: x => x.TypeID,
                        principalTable: "EventTypes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EventTypesProduct_Product_ProductsID",
                        column: x => x.ProductsID,
                        principalTable: "Product",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PackageProducts",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PackageID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MinGuestLimit = table.Column<int>(type: "int", nullable: false),
                    MaxGuestLimit = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PackageProducts", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PackageProducts_Package_PackageID",
                        column: x => x.PackageID,
                        principalTable: "Package",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PackageProducts_Product_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Product",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "EventService",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EventID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ServiceID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsFinalisedByCustomer = table.Column<bool>(type: "bit", nullable: false),
                    IsFinalisedByVendor = table.Column<bool>(type: "bit", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventService", x => x.ID);
                    table.ForeignKey(
                        name: "FK_EventService_Event_EventID",
                        column: x => x.EventID,
                        principalTable: "Event",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EventService_Service_ServiceID",
                        column: x => x.ServiceID,
                        principalTable: "Service",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateTable(
                name: "PackageServices",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ServiceID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PackageID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MinGuestLimit = table.Column<int>(type: "int", nullable: false),
                    MaxGuestLimit = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PackageServices", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PackageServices_Package_PackageID",
                        column: x => x.PackageID,
                        principalTable: "Package",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PackageServices_Service_ServiceID",
                        column: x => x.ServiceID,
                        principalTable: "Service",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Event_TypeID",
                table: "Event",
                column: "TypeID");

            migrationBuilder.CreateIndex(
                name: "IX_EventCustomers_CustomerID",
                table: "EventCustomers",
                column: "CustomerID");

            migrationBuilder.CreateIndex(
                name: "IX_EventCustomers_EventID",
                table: "EventCustomers",
                column: "EventID");

            migrationBuilder.CreateIndex(
                name: "IX_EventPackages_EventID",
                table: "EventPackages",
                column: "EventID");

            migrationBuilder.CreateIndex(
                name: "IX_EventPackages_PackageID",
                table: "EventPackages",
                column: "PackageID");

            migrationBuilder.CreateIndex(
                name: "IX_EventProduct_EventID",
                table: "EventProduct",
                column: "EventID");

            migrationBuilder.CreateIndex(
                name: "IX_EventProduct_ProductID",
                table: "EventProduct",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_EventService_EventID",
                table: "EventService",
                column: "EventID");

            migrationBuilder.CreateIndex(
                name: "IX_EventService_ServiceID",
                table: "EventService",
                column: "ServiceID");

            migrationBuilder.CreateIndex(
                name: "IX_EventTypesPackage_TypeID",
                table: "EventTypesPackage",
                column: "TypeID");

            migrationBuilder.CreateIndex(
                name: "IX_EventTypesProduct_TypeID",
                table: "EventTypesProduct",
                column: "TypeID");

            migrationBuilder.CreateIndex(
                name: "IX_EventTypesService_TypeID",
                table: "EventTypesService",
                column: "TypeID");

            migrationBuilder.CreateIndex(
                name: "IX_Package_VendorID",
                table: "Package",
                column: "VendorID");

            migrationBuilder.CreateIndex(
                name: "IX_PackageProducts_PackageID",
                table: "PackageProducts",
                column: "PackageID");

            migrationBuilder.CreateIndex(
                name: "IX_PackageProducts_ProductID",
                table: "PackageProducts",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_PackageServices_PackageID",
                table: "PackageServices",
                column: "PackageID");

            migrationBuilder.CreateIndex(
                name: "IX_PackageServices_ServiceID",
                table: "PackageServices",
                column: "ServiceID");

            migrationBuilder.CreateIndex(
                name: "IX_Product_VendorID",
                table: "Product",
                column: "VendorID");

            migrationBuilder.CreateIndex(
                name: "IX_Service_VendorID",
                table: "Service",
                column: "VendorID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventCustomers");

            migrationBuilder.DropTable(
                name: "EventPackages");

            migrationBuilder.DropTable(
                name: "EventProduct");

            migrationBuilder.DropTable(
                name: "EventService");

            migrationBuilder.DropTable(
                name: "EventTypesPackage");

            migrationBuilder.DropTable(
                name: "EventTypesProduct");

            migrationBuilder.DropTable(
                name: "EventTypesService");

            migrationBuilder.DropTable(
                name: "PackageProducts");

            migrationBuilder.DropTable(
                name: "PackageServices");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "Event");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "Package");

            migrationBuilder.DropTable(
                name: "Service");

            migrationBuilder.DropTable(
                name: "EventTypes");

            migrationBuilder.DropTable(
                name: "Vendor");
        }
    }
}
