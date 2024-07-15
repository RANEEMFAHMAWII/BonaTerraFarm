import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.scss']
})
export class OurProductComponent implements OnInit {

  constructor(private translate: TranslateService,) { }

  ngOnInit(): void {
  }
  products = [

    {
      name: 'FreshProduce',
      image: '../../../assets/img/homeBG.jpg',

    },
    {
      name: 'DairyProducts',
      image: '../../../assets/img/homeBG.jpg',

    },
    {
      name: 'LongShelf-LifeProducts',
      image: '../../../assets/img/homeBG.jpg',

    },
    {
      name: 'more',
      image: '../../../assets/img/homeBG.jpg',

    },

  ];

}
