import {
  Component, Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class CommonLoginComponent implements OnInit {
  isModalOpen = false;
  categoryList = MockCategoryList

  constructor() {
  }

  ngOnInit() {}

  openCardModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  ngOnChanges() {
  }
}

export interface Category {
  url: string;
}
export const MockCategoryList: Category[] = [

  {url: './assets/images/categories/DJ.png'},
  {url: './assets/images/categories/TBD_Caravan.png'},
  {url: './assets/images/categories/Artists.png'},
  {url: './assets/images/categories/Florist.png'},
  {url: './assets/images/categories/Event_Agency.png'},
  {url: './assets/images/categories/Makeup_Artist.png'},
  {url: './assets/images/categories/Priest.png'},
  {url: './assets/images/categories/Photographer.png'},
  {url: './assets/images/categories/Baraat.png'},
  {url: './assets/images/categories/TBD_Spot.png'},
  {url: './assets/images/categories/Caterer.png'},
  {url: './assets/images/categories/Security.png'},
  {url: './assets/images/categories/Henna_Artist.png'},
  {url: './assets/images/categories/Balloon_Decor.png'},
  {url: './assets/images/categories/Pet_Friendly_Products.png'},
  {url: './assets/images/categories/Gifting_Solutions.png'},
  {url: './assets/images/categories/Party_Supplies.png'},
  {url: './assets/images/categories/Bakers.png'},
  {url: './assets/images/categories/Invites.png'},
  {url: './assets/images/categories/Rentals.png'},
  {url: './assets/images/categories/Idols.png'},
  {url: './assets/images/categories/Tech_Solutions.png'},
  {url: './assets/images/categories/Alcohol.png'},
  {url: './assets/images/categories/Decorators.png'},
  {url: './assets/images/categories/Fashion.png'},
]

const search = ['Wedding Venues', 'Artists', 'Florist', 'Catering', 'Make-up Artist', 'Priests', 'Photographers', 'Security', 'Bakers', 'Dj\'s', 'Decor'];
const where = ['London', 'Mumbai', 'Ibiza', 'New Delhi', 'Sydney', 'Perth', 'Auckland', 'New York', 'Los Angeles', 'Rome', 'Athens', 'Berlin', 'Barcelona',]
