import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-connaughtcounties',
  templateUrl: './connaughtcounties.page.html',
  styleUrls: ['./connaughtcounties.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLinkWithHref]
})
export class ConnaughtcountiesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
