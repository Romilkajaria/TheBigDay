using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models.Form_Models
{
    public class Form
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        // which types of items does this form target. product, service or both
        public ItemType ItemType { get; set; }
        public Guid ItemCategoryId { get; internal set; }
        public FormLevel FormLevel { get; set; }
        //public Guid? ParentFormId { get; set; }
        public bool IsDeleted { get; set; }

        // navigation
        public List<FormField> Fields { get; set; } = new List<FormField>();
        public List<Form> SubForms { get; set; } = new List<Form>();
        // the cate gory this form is set against
        public ItemCategory? ItemCategory { get; set; }

    }
}

public enum FormLevel
{
    STORE,
    ITEM,
}

public enum ItemType
{
    PRODUCT,
    SERVICE,
}