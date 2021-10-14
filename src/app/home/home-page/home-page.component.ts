import { Component, OnInit } from '@angular/core';

import {Posts} from '../../post/posts';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public post:Posts;
  constructor() { 
    this.post = new Posts('../../assets/pictures/images (25).jpeg', '50% Discount on new black sofa', 'first 10 sales only', 'New arriving black sofa that goes well with grey, black and white background place your orders now to take advantage of the discount', true, false, false)
  }

  ngOnInit(): void {
  }

}
