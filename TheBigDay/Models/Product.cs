using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("Product")]
    public class Product : TBDitem
    {
        //dependancies
        public List<EventProduct>? EventProducts { get; set; }
        public List<PackageProducts>? PackageProducts { get; set; }
    }

    public enum PriceType
    {
        PER_PERSON,
        FLAT
    }

}