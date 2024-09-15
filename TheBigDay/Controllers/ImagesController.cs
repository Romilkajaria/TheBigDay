using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TheBigDay.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBigDay.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class ImagesController : ControllerBase
    {
        private readonly BlobStorageService _blobStorageService;

        public ImagesController(BlobStorageService blobStorageService)
        {
            _blobStorageService = blobStorageService;
        }

        // Upload an image
        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            using (var stream = file.OpenReadStream())
            {
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
                var contentType = file.ContentType;

                var url = await _blobStorageService.UploadImageAsync(stream, fileName, contentType);
                return Ok(new { Url = url });
            }
        }

        // Retrieve an image
        [HttpGet("retrieve/{fileName}")]
        public async Task<IActionResult> DownloadImage(string fileName)
        {
            var stream = await _blobStorageService.DownloadImageAsync(fileName);
            if (stream == null)
                return NotFound();

            return File(stream, "image/jpeg"); // Adjust content type based on your needs
        }

        [HttpPost("create-folder/{folderName}")]
        public async Task<IActionResult> CreateFolder(string folderName)
        {
            var result = await _blobStorageService.CreateFolderAsync(folderName);
            return Ok(result);
        }

        [HttpGet("list-folder/{folderName}")]
        public async Task<IActionResult> ListFolder(string folderName)
        {
            var blobs = await _blobStorageService.GetBlobsInFolderAsync(folderName);
            return Ok(blobs);
        }
    }

}

