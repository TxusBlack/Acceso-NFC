import { Component, OnInit } from '@angular/core';
import { NfcService } from 'src/app/services/nfc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nfcCard: any;

  constructor(
    private nfcServices: NfcService
  ) { }

  ngOnInit() {
  }

  async readCard() {
    this.nfcCard = await this.nfcServices.listen();
  }

  clean() {
    this.nfcCard = null;
  }

}
