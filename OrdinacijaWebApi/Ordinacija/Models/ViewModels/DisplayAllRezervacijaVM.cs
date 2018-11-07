using Ordinacija.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ordinacija.Models.ViewModels
{
    public class DisplayAllRezervacijaVM
    {
        public int id { get; set; }
        public int PacijentID { get; set; }
        public System.DateTime start { get; set; }
        public System.DateTime end { get; set; }
        public bool RezervacijaPotvrda { get; set; }
        public string title { get; set; }
    }
}