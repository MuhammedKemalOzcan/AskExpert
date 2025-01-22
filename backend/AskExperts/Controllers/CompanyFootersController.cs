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
    public class CompanyFootersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CompanyFootersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/CompanyFooters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompanyFooter>>> GetCompanyFooters()
        {
            return await _context.CompanyFooters.ToListAsync();
        }

        // GET: api/CompanyFooters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CompanyFooter>> GetCompanyFooter(int id)
        {
            var companyFooter = await _context.CompanyFooters.FindAsync(id);

            if (companyFooter == null)
            {
                return NotFound();
            }

            return companyFooter;
        }

        // PUT: api/CompanyFooters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanyFooter(int id, CompanyFooter companyFooter)
        {
            if (id != companyFooter.Id)
            {
                return BadRequest();
            }

            _context.Entry(companyFooter).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyFooterExists(id))
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

        // POST: api/CompanyFooters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CompanyFooter>> PostCompanyFooter(CompanyFooter companyFooter)
        {
            _context.CompanyFooters.Add(companyFooter);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompanyFooter", new { id = companyFooter.Id }, companyFooter);
        }

        // DELETE: api/CompanyFooters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompanyFooter(int id)
        {
            var companyFooter = await _context.CompanyFooters.FindAsync(id);
            if (companyFooter == null)
            {
                return NotFound();
            }

            _context.CompanyFooters.Remove(companyFooter);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CompanyFooterExists(int id)
        {
            return _context.CompanyFooters.Any(e => e.Id == id);
        }
    }
}
