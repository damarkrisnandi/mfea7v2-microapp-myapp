import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'my-app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  title = ''
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    fetch(assetUrl('config.json')).then(async (data:any) => {
      const json = await data.json();
      console.log(json);
      this.title = json.title;
    });

  }

  toPage1(evt) {
    this.router.navigateByUrl('/my-app/page1')
  }

  toHome(evt) {
    location.pathname = '/';
  }

  toLazyPage(evt) {
    this.router.navigateByUrl('/my-app/lazy-page')
  }

}
