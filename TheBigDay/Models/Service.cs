using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheBigDay.Models
{
    [Table("Service")]
    public class Service : TBDitem
    {
        //dependancies
        public List<EventService>? EventServices { get; set; }
        public List<PackageServices>? PackageServices { get; set; }
    }
}