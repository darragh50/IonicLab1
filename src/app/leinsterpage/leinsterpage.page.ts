import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-leinsterpage',
  templateUrl: './leinsterpage.page.html',
  styleUrls: ['./leinsterpage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LeinsterpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counties: string[] = ["Carlow", "Dublin", "Kildare",
  "Kilkenny", "Laois", "Longford", "Louth", "Meath",
  "Offaly", "Westmeath", "Wexford", "Wicklow"];
  

}
