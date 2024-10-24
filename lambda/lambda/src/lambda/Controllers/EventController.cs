using GraphQL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace lambda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    
    
    {
        private readonly OwnerConsumer _consumer;
        
        public EventController(OwnerConsumer consumer)
        {
            _consumer = consumer;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetThreeUpcomingEvents()
        {
            var events = await _consumer.QueryThreeUpcomingEvents();
            return Ok(events);
        }
        
    }
}
