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
    public class BlogDetailsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BlogDetailsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/BlogDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogDetails>>> GetBlogDetails()
        {
            return await _context.BlogDetails.ToListAsync();
        }

        // GET: api/BlogDetails/5
        [HttpGet("ByBlogId/{blogId}")]
        public async Task<ActionResult<BlogDetails>> GetBlogDetails(int blogId)
        {
            var blogDetails = await _context.BlogDetails.Where(b => b.BlogId == blogId).ToListAsync();

            if (blogDetails == null)
            {
                return NotFound();
            }

            return Ok(blogDetails);
        }

        // PUT: api/BlogDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogDetails(int id, BlogDetails blogDetails)
        {
            if (id != blogDetails.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogDetailsExists(id))
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

        // POST: api/BlogDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BlogDetails>> PostBlogDetails(BlogDetails blogDetails)
        {
            _context.BlogDetails.Add(blogDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogDetails", new { id = blogDetails.Id }, blogDetails);
        }

        // DELETE: api/BlogDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogDetails(int id)
        {
            var blogDetails = await _context.BlogDetails.FindAsync(id);
            if (blogDetails == null)
            {
                return NotFound();
            }

            _context.BlogDetails.Remove(blogDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BlogDetailsExists(int id)
        {
            return _context.BlogDetails.Any(e => e.Id == id);
        }
    }
}
