import { Component, OnInit } from '@angular/core';
import { Produce } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  activeTab: string = 'fruits';
  placeholderImage: string = '../../../assets/img/homeBG.jpg';

  fruits: Produce[] = [
    { name: 'Melons', season: 'May to September', imageUrl: '../../../assets/img/fruits/Melons.jpg', type: 'Vegetable' },
    { name: 'Watermelon', season: 'May to September', imageUrl:'../../../assets/img/fruits/Watermelon.jpg' , type: 'Fruit' },
    { name: 'Apricot', season: 'May to August', imageUrl: '../../../assets/img/fruits/APRICOT.jpg', type: 'Fruit' },
    { name: 'Peach', season: 'May to September', imageUrl: '../../../assets/img/fruits/PEACH.jpg', type: 'Fruit' },
    { name: 'Clementine', season: 'November to February', imageUrl: '../../../assets/img/fruits/CLEMENTINE.jpg', type: 'Fruit' },
    { name: 'Abou Sarrar', season: 'November to January', imageUrl: '', type: 'Fruit' },
    { name: 'Lemon', season: 'Year-round', imageUrl: '../../../assets/img/fruits/LEMON.jpg', type: 'Fruit' },
    { name: 'Avocado', season: 'November to March', imageUrl: '../../../assets/img/fruits/AVOCADO.jpg', type: 'Fruit' },
    { name: 'Mulberry', season: 'April to July', imageUrl: '../../../assets/img/fruits/MULBERRY.jpg', type: 'Fruit' },
    { name: 'Carnop', season: 'May to July', imageUrl:'', type: 'Fruit' },
    { name: 'Mexican Apple', season: 'May to July', imageUrl:'../../../assets/img/fruits/Mexican-Apple.jpg', type: 'Fruit' },
    { name: 'White Grapes', season: 'June to September', imageUrl:'../../../assets/img/fruits/White-Grapes.jpg', type: 'Fruit' },
    { name: 'Red Grapes', season: 'June to October', imageUrl:'../../../assets/img/fruits/Red-Grapes.jpg', type: 'Fruit' },
    { name: 'Pomegranate', season: 'September to November', imageUrl:'../../../assets/img/fruits/Pomegranate.jpg', type: 'Fruit' },
    { name: 'Passion Fruit', season: 'July to October', imageUrl:'../../../assets/img/fruits/Passion-Fruit.jpg', type: 'Fruit' },
    { name: 'Grapefruit', season: 'October to February', imageUrl:'../../../assets/img/fruits/Grapefruit.jpg', type: 'Fruit' },
    { name: 'Pomello', season: 'October to February', imageUrl:'../../../assets/img/fruits/POMELLO.jpg', type: 'Fruit' },
    { name: 'Kaki', season: 'September to November', imageUrl:'../../../assets/img/fruits/Kaki.jpg', type: 'Fruit' },
    { name: 'Ashta', season: 'June to August', imageUrl:'../../../assets/img/fruits/Ashta.jpg', type: 'Fruit' },
    { name: 'Orange', season: 'December to May', imageUrl:'../../../assets/img/fruits/Orange.jpg', type: 'Fruit' },
    { name: 'Figs', season: 'June to September', imageUrl:'../../../assets/img/fruits/FIGS.jpg', type: 'Fruit' },
    { name: 'Guava', season: 'September to December', imageUrl:'../../../assets/img/fruits/Guava.jpg', type: 'Fruit' },
    { name: 'Akidenia', season: 'September to November', imageUrl:'', type: 'Fruit' },
    { name: 'Afandi', season: 'September to November', imageUrl:'', type: 'Fruit' },
    { name: 'Sfarjel', season: 'October to December', imageUrl:'', type: 'Fruit' },
    { name: 'Ennab', season: 'August to October', imageUrl:'../../../assets/img/fruits/Ennab.jpg', type: 'Fruit' },
    { name: 'Arasia', season: 'August to October', imageUrl:'', type: 'Fruit' },
    { name: 'Walnut', season: 'September to November', imageUrl:'../../../assets/img/fruits/Walnut.jpg', type: 'Fruit' }
  ];

  vegetables: Produce[] = [
    { name: 'Loubieh', season: 'May to November', imageUrl: '../../../assets/img/Vegetable/Loubieh.jpg', type: 'Vegetable' },
    { name: 'Zucchini', season: 'Year-round', imageUrl: '../../../assets/img/Vegetable/Zucchini.jpg', type: 'Vegetable' },
    { name: 'Cherry Tomato', season: 'Year-round', imageUrl: '../../../assets/img/Vegetable/Cherry-Tomato.jpg', type: 'Vegetable' },
    { name: 'Coriander', season: 'Year-round', imageUrl: '../../../assets/img/Vegetable/Coriander.jpg', type: 'Vegetable' },
    { name: 'Parsley', season: 'Year-round', imageUrl: '../../../assets/img/Vegetable/Parsley.jpg', type: 'Vegetable' },
    { name: 'Rocca', season: 'Year-round', imageUrl: '', type: 'Vegetable' },
    { name: 'Okra', season: 'June to September', imageUrl: '../../../assets/img/Vegetable/Okra.jpg', type: 'Vegetable' },
    { name: 'Lettuce', season: 'Year-round', imageUrl: '../../../assets/img/Vegetable/Lettuce.jpg', type: 'Vegetable' },
    { name: 'Iceberg Lettuce', season: 'Year-round', imageUrl: '../../../assets/img/Vegetable/Iceberg-Lettuce.jpg', type: 'Vegetable' },
    { name: 'Olives', season: 'October to December', imageUrl:'../../../assets/img/Vegetable/Olives.jpg', type: 'Vegetable' },
    { name: 'Thyme', season: 'Year-round', imageUrl: '', type: 'Vegetable' },
    { name: 'Oregano', season: 'Year-round', imageUrl: '../../../assets/img/Vegetable/Oregano.jpg', type: 'Vegetable' }
  ];
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
