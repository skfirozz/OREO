import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
