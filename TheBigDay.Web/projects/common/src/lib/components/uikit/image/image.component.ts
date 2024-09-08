import {Component} from '@angular/core';
import {ImageService} from './image.service'; // Adjust path as needed
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent {
    progress: number = 0;
    imageUrl: SafeUrl | null = null;
    errorMessage: string = '';
    fileName: string = '';

    constructor(private imageService: ImageService, private sanitizer: DomSanitizer) {
    }

    // Handle file upload using PrimeNG FileUpload
    onFileSelected(event: any): void {
        const file = event.files[0]; // Get the first file
        if (file) {
            this.imageService.uploadImage(file).subscribe({
                next: (response) => {
                    if (response.status === 'progress') {
                        this.progress = response.message;
                    } else if (response.status === 'completed') {
                        console.log('Image uploaded successfully:', response.message);
                    }
                },
                error: (err) => {
                    console.error('Error uploading image:', err);
                    this.errorMessage = 'Error uploading image.';
                }
            });
        }
    }

    // Download and display image
    downloadImage(): void {
        if (this.fileName) {
            this.imageService.downloadImage(this.fileName).subscribe({
                next: (blob) => {
                    const objectUrl = URL.createObjectURL(blob);
                    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
                },
                error: (err) => {
                    console.error('Error downloading image:', err);
                    this.errorMessage = 'Error downloading image.';
                }
            });
        } else {
            this.errorMessage = 'Please enter a valid file name.';
        }
    }
}
