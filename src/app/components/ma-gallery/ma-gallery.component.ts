import { Component, OnInit } from '@angular/core';
import { ServiceGalleryService } from '../../services/service-gallery.service';

@Component({
  selector: 'app-ma-gallery',
  templateUrl: './ma-gallery.component.html',
  styleUrls: ['./ma-gallery.component.css']
})
export class MaGalleryComponent implements OnInit {

  images: {};
  pageSize: number = 10;
  pageCourante: number = 1;
  motCle: string = "";
  showPanelData: boolean = false;

  nombrePages: Array<number> = [];
  totalPages: number;
  constructor(private serviceImages: ServiceGalleryService) {

  }


  ngOnInit() {

  }


  onSearch(formData) {
    this.motCle = formData.motCle;
    console.log("motCle" + formData.motCle);
    if (this.motCle === "") {
      this.showPanelData = false;
    } else {
      this.showPanelData = true;
    }
    this.serviceImages.getData(this.motCle, this.pageSize, this.pageCourante)
      .subscribe(data => {
        this.images = data;
        this.totalPages = this.images['totalHits'] / this.pageSize;
        console.log(this.totalPages);
        if (this.images['totalHits'] % this.pageSize != 0) {
          this.totalPages += 1;
          this.nombrePages = new Array(this.images['totalHits']);
        }
      }, error => {
        console.log(error);
      });
  }

  goToPage(i: number, mot: string) {
    this.motCle = mot;
    this.pageCourante = i;
    if (this.motCle === "") {
      this.showPanelData = false;
    } else {
      this.showPanelData = true;
    }
    this.serviceImages.getData(this.motCle, this.pageSize, this.pageCourante)
      .subscribe(data => {
        this.images = data;
        this.showPanelData = true;
        this.totalPages = this.images['totalHits'] / this.pageSize;
        console.log(this.totalPages);
        if (this.images['totalHits'] % this.pageSize != 0) {
          this.totalPages += 1;
          this.nombrePages = new Array(this.images['totalHits']);
        }
      }, error => {
        console.log(error);
        this.showPanelData = false;
      });


  }

}
