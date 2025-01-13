using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AskExperts.Data;
using AskExperts.Models;

namespace AskExperts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesDatasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ServicesDatasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ServicesDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServicesData>>> GetServicesData()
        {
            return await _context.ServicesData.ToListAsync();
        }

        // GET: api/ServicesDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ServicesData>> GetServicesData(int id)
        {
            var servicesData = await _context.ServicesData.FindAsync(id);

            if (servicesData == null)
            {
                return NotFound();
            }

            return servicesData;
        }

        // PUT: api/ServicesDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServicesData(int id, ServicesData servicesData)
        {
            if (id != servicesData.Id)
            {
                return BadRequest();
            }

            _context.Entry(servicesData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServicesDataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ServicesDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ServicesData>> PostServicesData(ServicesData servicesData)
        {
            _context.ServicesData.Add(servicesData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServicesData", new { id = servicesData.Id }, servicesData);
        }

        // DELETE: api/ServicesDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServicesData(int id)
        {
            var servicesData = await _context.ServicesData.FindAsync(id);
            if (servicesData == null)
            {
                return NotFound();
            }

            _context.ServicesData.Remove(servicesData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ServicesDataExists(int id)
        {
            return _context.ServicesData.Any(e => e.Id == id);
        }
    }
}
