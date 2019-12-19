import {Component, Input, OnInit} from '@angular/core';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {Project} from '../../../model/project';

@Component({
  selector: 'vbcard-project',
  styleUrls: ['./project.component.scss'],
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  images: GalleryItem[];
  @Input()
  galleryId: string;

  @Input()
  project: Project;

  constructor(public gallery: Gallery) {
  }

  ngOnInit() {
    this.images = this.project.pictures.map(pic => new ImageItem({src: pic, thumb: pic}));
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.images);
  }
}
