import { Component, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from './../../shared/Services/EventService';
import { WishService } from './wish.service';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishListComponent } from './wish-list/wish-list.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    WishFilterComponent,
    AddWishFormComponent,
    WishListComponent
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {
  items: WishItem[] = [];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      // remove wish from items

      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any) => {
      this.items = data;
    },
    (error: any)=>{
      alert(error.message)
    }
    )
  }

  filter: any;
}
