import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { ConnaughtcountiesPage } from '../connaughtcounties/connaughtcounties.page';

@Component({
  selector: 'app-connaught',
  templateUrl: './connaught.page.html',
  styleUrls: ['./connaught.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLinkWithHref,ConnaughtcountiesPage]
})
export class ConnaughtPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
