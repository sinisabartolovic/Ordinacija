using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Ordinacija.DataAccess;
using System.Web.Http.Cors;
using Ordinacija.Models;
using System.Threading.Tasks;
using Ordinacija.Models.ViewModels;
using AutoMapper;

namespace Ordinacija.Controllers
{
    //[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class RezervacijaController : ApiController
    {
        private DataAccess.DbModel db = new DataAccess.DbModel();


        // GET: api/Rezervacija
        public async Task<IHttpActionResult> GetRezervacijaAsync()
        {
            //_repo.Configuration.ProxyCreationEnabled = false;


            var sveRezervacije = await db.Rezervacija.Include(p => p.Pacijent).ToListAsync();      
            var dest = Mapper.Map<IEnumerable<DisplayAllRezervacijaVM>>(sveRezervacije);
            return Ok(dest);
        }

    }
}