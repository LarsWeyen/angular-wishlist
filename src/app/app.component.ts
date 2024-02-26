import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { WishModule } from './wish/wish.module';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    WishModule,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{


}
