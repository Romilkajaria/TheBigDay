using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace TheBigDay.Services
{

    public class BlobStorageService
    {
        private readonly BlobContainerClient _containerClient;

        public BlobStorageService(IConfiguration configuration)
        {
            var connectionString = configuration["AzureBlobStorage:ConnectionString"];
            var containerName = configuration["AzureBlobStorage:ContainerName"];
            var blobServiceClient = new BlobServiceClient(connectionString);
            _containerClient = blobServiceClient.GetBlobContainerClient(containerName);
        }

        public async Task<string> UploadImageAsync(Stream fileStream, string fileName, string contentType)
        {
            var blobClient = _containerClient.GetBlobClient(fileName);
            await blobClient.UploadAsync(fileStream, new BlobHttpHeaders { ContentType = contentType });
            return blobClient.Uri.ToString();
        }

        public async Task<Stream> DownloadImageAsync(string fileName)
        {
            var blobClient = _containerClient.GetBlobClient(fileName);
            var downloadInfo = await blobClient.DownloadAsync();
            return downloadInfo.Value.Content;
        }

        public async Task<string> CreateFolderAsync(string folderName)
        {
            var folderBlobClient = _containerClient.GetBlobClient($"{folderName}/placeholder.txt");

            // Create a zero-length file to represent the folder
            using (var stream = new MemoryStream())
            {
                await folderBlobClient.UploadAsync(stream);
            }

            return $"Folder '{folderName}' created.";
        }

        public async Task<List<string>> GetBlobsInFolderAsync(string folderName)
        {
            var blobItems = _containerClient.GetBlobsAsync(prefix: folderName + "/");

            var blobNames = new List<string>();

            await foreach (var blobItem in blobItems)
            {
                blobNames.Add(blobItem.Name);
            }

            return blobNames;
        }


    }
}
