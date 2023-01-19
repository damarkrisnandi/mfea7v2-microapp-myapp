import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.css']
})
export class LazyPageComponent implements OnInit {
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

  toMain(event) {
    this.router.navigateByUrl('/my-app')
  }

}
