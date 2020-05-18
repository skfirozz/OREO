import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-store',
  templateUrl: './display-store.component.html',
  styleUrls: ['./display-store.component.scss']
})
export class DisplayStoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stores = [
    { name: "Lady Bird biscycle", offerPrice: 4000, actualPrice: 5000, image: "biscycle" },
    { name: "flowers", offerPrice: 150, actualPrice: 200, image: "flower" },
    { name: "jar", offerPrice: 400, actualPrice: 600, image: "jar" },
    { name: "Normal Bag", offerPrice: 175, actualPrice: 900, image: "bag" },
    { name: "Chair", offerPrice: 99, actualPrice: 100, image: "chair" },
    { name: "small bag", offerPrice: 444, actualPrice: 530, image: "smallbag" },
    { name: "headset", offerPrice: 888, actualPrice: 963, image: "headset" },
    { name: "wood clock", offerPrice: 222, actualPrice: 1236, image: "woodclock" },
    { name: "pen box", offerPrice: 987, actualPrice: 896, image: "penbox" },
    { name: "pillow", offerPrice: 600, actualPrice: 200, image: "pillow" },
    { name: "wood chair", offerPrice: 300, actualPrice: 300, image: "woodchair" },
    { name: "clock", offerPrice: 200, actualPrice: 932, image: "clock" }
  ]
}
