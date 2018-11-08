using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Ordinacija.DataAccess;

namespace Ordinacija.Controllers
{
    public class ZahvatController : ApiController
    {
        private DataAccess.DbModel db = new DataAccess.DbModel();

        // GET: api/Zahvat
        public IQueryable<Zahvat> GetZahvat()
        {
            return db.Zahvat;
        }

        // GET: api/Zahvat/5
        [ResponseType(typeof(Zahvat))]
        public async Task<IHttpActionResult> GetZahvat(int id)
        {
            Zahvat zahvat = await db.Zahvat.FindAsync(id);
            if (zahvat == null)
            {
                return NotFound();
            }

            return Ok(zahvat);
        }

        // PUT: api/Zahvat/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutZahvat(int id, Zahvat zahvat)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != zahvat.ZahvatId)
            {
                return BadRequest();
            }

            db.Entry(zahvat).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZahvatExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Zahvat
        [ResponseType(typeof(Zahvat))]
        public async Task<IHttpActionResult> PostZahvat(Zahvat zahvat)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Zahvat.Add(zahvat);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = zahvat.ZahvatId }, zahvat);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ZahvatExists(int id)
        {
            return db.Zahvat.Count(e => e.ZahvatId == id) > 0;
        }
    }
}