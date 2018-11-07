//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Ordinacija.DataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class Rezervacija
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Rezervacija()
        {
            this.Zahvat = new HashSet<Zahvat>();
        }
    
        public int RezervacijaID { get; set; }
        public int PacijentID { get; set; }
        public System.DateTime VrijemePocetka { get; set; }
        public System.DateTime VrijemeZavrsetka { get; set; }
        public bool RezervacijaPotvrda { get; set; }
        public string Administrator { get; set; }
        public string Stomatolog { get; set; }
        public string Napomena { get; set; }
    
        public virtual Pacijent Pacijent { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Zahvat> Zahvat { get; set; }
    }
}
