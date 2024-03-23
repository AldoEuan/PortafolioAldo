import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss']
})
export class GalleryDialogComponent implements OnInit {
  currentIndex: number = 0;
  currentImage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentImage = data.images[0];
   }
  ngOnInit(): void {
     
  }

  nextImage(): void {
    if (this.currentIndex < this.data.images.length - 1) {
      this.currentIndex++;
      this.currentImage = this.data.images[this.currentIndex];
    }
  }

  previousImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentImage = this.data.images[this.currentIndex];
    }
  }
}
