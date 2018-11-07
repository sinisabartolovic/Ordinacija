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
    public class PacijentController : ApiController
    {
        private DataAccess.DbModel db = new DataAccess.DbModel();

        // GET: api/Pacijent
        public IQueryable<Pacijent> GetPacijent()
        {
            return db.Pacijent;
        }

        // GET: api/Pacijent/5
        [ResponseType(typeof(Pacijent))]
        public async Task<IHttpActionResult> GetPacijent(int id)
        {
            Pacijent pacijent = await db.Pacijent.FindAsync(id);
            if (pacijent == null)
            {
                return NotFound();
            }

            return Ok(pacijent);
        }

        // PUT: api/Pacijent/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPacijent(int id, Pacijent pacijent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pacijent.PacijentID)
            {
                return BadRequest();
            }

            db.Entry(pacijent).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PacijentExists(id))
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

        // POST: api/Pacijent
        [ResponseType(typeof(Pacijent))]
        public async Task<IHttpActionResult> PostPacijent(Pacijent pacijent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Pacijent.Add(pacijent);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = pacijent.PacijentID }, pacijent);
        }

        // DELETE: api/Pacijent/5
        [ResponseType(typeof(Pacijent))]
        public async Task<IHttpActionResult> DeletePacijent(int id)
        {
            Pacijent pacijent = await db.Pacijent.FindAsync(id);
            if (pacijent == null)
            {
                return NotFound();
            }

            db.Pacijent.Remove(pacijent);
            await db.SaveChangesAsync();

            return Ok(pacijent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PacijentExists(int id)
        {
            return db.Pacijent.Count(e => e.PacijentID == id) > 0;
        }
    }
}