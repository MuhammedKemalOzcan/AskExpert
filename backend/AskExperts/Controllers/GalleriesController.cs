﻿using System;
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
    public class GalleriesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GalleriesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Galleries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gallery>>> GetGallery()
        {
            return await _context.Gallery.ToListAsync();
        }

        // GET: api/Galleries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gallery>> GetGallery(int id)
        {
            var gallery = await _context.Gallery.FindAsync(id);

            if (gallery == null)
            {
                return NotFound();
            }

            return gallery;
        }

        // PUT: api/Galleries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGallery(int id, Gallery gallery)
        {
            if (id != gallery.Id)
            {
                return BadRequest();
            }

            _context.Entry(gallery).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GalleryExists(id))
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

        // POST: api/Galleries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Gallery>> PostGallery(Gallery gallery)
        {
            _context.Gallery.Add(gallery);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGallery", new { id = gallery.Id }, gallery);
        }

        // DELETE: api/Galleries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGallery(int id)
        {
            var gallery = await _context.Gallery.FindAsync(id);
            if (gallery == null)
            {
                return NotFound();
            }

            _context.Gallery.Remove(gallery);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GalleryExists(int id)
        {
            return _context.Gallery.Any(e => e.Id == id);
        }
    }
}
