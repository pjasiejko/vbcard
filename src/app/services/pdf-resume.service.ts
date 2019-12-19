import {Injectable} from '@angular/core';
import * as jsPDF from 'jspdf';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfResumeService {

  resumeFileName: string;

  constructor() {
    this.resumeFileName = 'Piotr-Jasiejko-resume.pdf';
  }

  create() {
    const doc = new jsPDF();
    this.loadImage('../../assets/images/head-right.png').subscribe(img => {
      doc.addImage(img, 10, 10);
      doc.save('');
    });


  }

  loadImage(imagePath) {
    return new Observable(observer => {
      const img = new Image();
      img.src = imagePath;
      img.onload = () => {
        observer.next(img);
        observer.complete();
      };
      img.onerror = (err) => {
        observer.error(err);
      };
    });
  }

}
