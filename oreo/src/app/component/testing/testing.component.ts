import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  sidenav=true;
  constructor() { }

  ngOnInit() {
  }

  button()
  {
    if(this.sidenav)
    this.sidenav=false;
    else this.sidenav=true;
  }

}
