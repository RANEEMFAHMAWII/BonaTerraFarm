import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lang;
  statisAbout: any = {

  }
  constructor(
    private homeService: HomeService,
    private translate: TranslateService,
    ) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
    });
    if (!this.lang) this.lang = this.translate.currentLang


  }

}

