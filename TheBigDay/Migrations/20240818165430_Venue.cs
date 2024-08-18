using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheBigDay.Migrations
{
    /// <inheritdoc />
    public partial class Venue : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EventItem_FormEntry_FormEntryId",
                table: "EventItem");

            migrationBuilder.DropTable(
                name: "FormEntry");

            migrationBuilder.DropTable(
                name: "FormField");

            migrationBuilder.DropTable(
                name: "Form");

            migrationBuilder.DropIndex(
                name: "IX_EventItem_FormEntryId",
                table: "EventItem");

            migrationBuilder.DropColumn(
                name: "FormEntryId",
                table: "EventItem");

            migrationBuilder.CreateTable(
                name: "BookingRequirements",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EmailAdderss = table.Column<bool>(type: "bit", nullable: false),
                    PhoneNumber = table.Column<bool>(type: "bit", nullable: false),
                    PaymentInformation = table.Column<bool>(type: "bit", nullable: false),
                    PropertyRules = table.Column<bool>(type: "bit", nullable: false),
                    VendorDetails = table.Column<bool>(type: "bit", nullable: false),
                    VendorRules = table.Column<bool>(type: "bit", nullable: false),
                    BookingDetails2DaysPrior = table.Column<bool>(type: "bit", nullable: false),
                    IsDisabled = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingRequirements", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PricingDetail",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BasePrice = table.Column<double>(type: "float", nullable: false),
                    MinimumPrice = table.Column<double>(type: "float", nullable: false),
                    MaximumPrice = table.Column<double>(type: "float", nullable: true),
                    NumOfGuestsToQualifyAsBulkBooking = table.Column<int>(type: "int", nullable: false),
                    SecurityDeposit = table.Column<double>(type: "float", nullable: false),
                    DepositPreference = table.Column<int>(type: "int", nullable: false),
                    BillingCountry = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PricingDetail", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Venue",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PropertyType = table.Column<int>(type: "int", nullable: false),
                    SpaceType = table.Column<int>(type: "int", nullable: false),
                    Size = table.Column<double>(type: "float", nullable: false),
                    MaxNumOfGuests = table.Column<int>(type: "int", nullable: false),
                    ListingAsCompany = table.Column<bool>(type: "bit", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LocationLandmark = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Amenities = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SoundRestrictions = table.Column<bool>(type: "bit", nullable: false),
                    WhatIsAround = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DaysNoticeNeededBeforeGuestArrives = table.Column<int>(type: "int", nullable: false),
                    DaysInAdvanceCanGuestsBook = table.Column<int>(type: "int", nullable: false),
                    CheckinTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    CheckoutTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    NumOfGuestsToQualifyAsExtendedStay = table.Column<int>(type: "int", nullable: false),
                    VenueVisitsOptions = table.Column<int>(type: "int", nullable: false),
                    NumOfPeopleInVisit = table.Column<int>(type: "int", nullable: false),
                    HoursPriorToVendorCheckin = table.Column<int>(type: "int", nullable: false),
                    AdditionalPermissionsRequiredWhenCheckin = table.Column<bool>(type: "bit", nullable: false),
                    RestrictionsRelatedToSetup = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BookingRequirementsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PricingDetailsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StoreId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Venue", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Venue_BookingRequirements_BookingRequirementsId",
                        column: x => x.BookingRequirementsId,
                        principalTable: "BookingRequirements",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Venue_PricingDetail_PricingDetailsId",
                        column: x => x.PricingDetailsId,
                        principalTable: "PricingDetail",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Venue_Store_StoreId",
                        column: x => x.StoreId,
                        principalTable: "Store",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AvailabilityDateRange",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    VenueId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvailabilityDateRange", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AvailabilityDateRange_Venue_VenueId",
                        column: x => x.VenueId,
                        principalTable: "Venue",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AvailabilityDateRange_VenueId",
                table: "AvailabilityDateRange",
                column: "VenueId");

            migrationBuilder.CreateIndex(
                name: "IX_Venue_BookingRequirementsId",
                table: "Venue",
                column: "BookingRequirementsId");

            migrationBuilder.CreateIndex(
                name: "IX_Venue_PricingDetailsId",
                table: "Venue",
                column: "PricingDetailsId");

            migrationBuilder.CreateIndex(
                name: "IX_Venue_StoreId",
                table: "Venue",
                column: "StoreId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AvailabilityDateRange");

            migrationBuilder.DropTable(
                name: "Venue");

            migrationBuilder.DropTable(
                name: "BookingRequirements");

            migrationBuilder.DropTable(
                name: "PricingDetail");

            migrationBuilder.AddColumn<Guid>(
                name: "FormEntryId",
                table: "EventItem",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "Form",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ItemCategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FormId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    FormLevel = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    ItemType = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Form", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Form_Form_FormId",
                        column: x => x.FormId,
                        principalTable: "Form",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Form_ItemCategory_ItemCategoryId",
                        column: x => x.ItemCategoryId,
                        principalTable: "ItemCategory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FormField",
                columns: table => new
                {
                    FieldId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FormId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Options = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Placeholder = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Required = table.Column<bool>(type: "bit", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormField", x => x.FieldId);
                    table.ForeignKey(
                        name: "FK_FormField_Form_FormId",
                        column: x => x.FormId,
                        principalTable: "Form",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "FormEntry",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FormFieldId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FormId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StoreId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BooleanValue = table.Column<bool>(type: "bit", nullable: true),
                    IntValue = table.Column<int>(type: "int", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    LinkValue = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LongValue = table.Column<long>(type: "bigint", nullable: true),
                    StringValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormEntry", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormEntry_FormField_FormFieldId",
                        column: x => x.FormFieldId,
                        principalTable: "FormField",
                        principalColumn: "FieldId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FormEntry_Form_FormId",
                        column: x => x.FormId,
                        principalTable: "Form",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FormEntry_Store_StoreId",
                        column: x => x.StoreId,
                        principalTable: "Store",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EventItem_FormEntryId",
                table: "EventItem",
                column: "FormEntryId");

            migrationBuilder.CreateIndex(
                name: "IX_Form_FormId",
                table: "Form",
                column: "FormId");

            migrationBuilder.CreateIndex(
                name: "IX_Form_ItemCategoryId",
                table: "Form",
                column: "ItemCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_FormEntry_FormFieldId",
                table: "FormEntry",
                column: "FormFieldId");

            migrationBuilder.CreateIndex(
                name: "IX_FormEntry_FormId",
                table: "FormEntry",
                column: "FormId");

            migrationBuilder.CreateIndex(
                name: "IX_FormEntry_StoreId",
                table: "FormEntry",
                column: "StoreId");

            migrationBuilder.CreateIndex(
                name: "IX_FormField_FormId",
                table: "FormField",
                column: "FormId");

            migrationBuilder.AddForeignKey(
                name: "FK_EventItem_FormEntry_FormEntryId",
                table: "EventItem",
                column: "FormEntryId",
                principalTable: "FormEntry",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
