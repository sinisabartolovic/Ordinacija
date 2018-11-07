using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Ordinacija.DataAccess;
using System.Data.Entity;

namespace Ordinacija.Models
{
    public class OrdinacijaRepository
    {
        private readonly DbModel _db;

        public OrdinacijaRepository(DbModel db)
        {
            this._db = db;
        }

        public async Task<IEnumerable<Rezervacija>> GetAllRezervacijaAsync()
        {
            var rez = await _db.Rezervacija.Include(p => p.Pacijent).ToListAsync();
            return rez;
        }
    }
}