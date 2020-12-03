import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  list = Array(15);
  constructor() { }
  ngOnInit() {}
  doRefresh({ target }) {
    setTimeout(() => target.complete(), 500);
  }
}
