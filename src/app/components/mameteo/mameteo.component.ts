import { Component, OnInit } from '@angular/core';
import { MameteoService } from '../../services/mameteo.service';
@Component({
  selector: 'app-mameteo',
  templateUrl: './mameteo.component.html',
  styleUrls: ['./mameteo.component.css']
})
export class MameteoComponent implements OnInit {

  donnes: {};
  ville: string = "";
  messageError: string = "";
  showPanel: boolean = true;
  constructor(private serviceMeteo: MameteoService) {

  }

  onGetMeteo(formData) {
    this.ville = formData.ville;
    this.showPanel = true;
    if (!this.ville) {
      this.messageError = "Veuillez saisir la ville ?";
      this.donnes = new Array();
      this.showPanel = false
    }
    this.serviceMeteo.getMaMeteo(this.ville)
      .subscribe(data => {
        this.donnes = data;
        console.log(this.donnes);
      }, error => {
        console.log(error);

      });
  }

  ngOnInit() {
  }

}
