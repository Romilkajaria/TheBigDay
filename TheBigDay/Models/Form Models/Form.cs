using System.ComponentModel.DataAnnotations;

namespace TheBigDay.Models.Form_Models
{
    public class Form
    {
        [Key]
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        // which types of items does this form target. product, service or both
        public ItemType ItemType { get; set; }
        // the cate gory this form is set against
        public required ItemCategory ItemCategory { get; set; }
        public FormLevel FormLevel { get; set; }
        //public Guid? ParentFormId { get; set; }
        public bool IsDeleted { get; set; }

        // navigation
        public List<FormField> Fields { get; set; } = new List<FormField>();
        public List<Form> SubForms { get; set; } = new List<Form>();
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