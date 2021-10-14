import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.scss']
})
export class ManagePostComponent implements OnInit {
  private createPostState:boolean;
  constructor() { this.createPostState = true; }

  ngOnInit(): void {
    
  }
  /* name */
  public name() {

    this.createPostState = !this.createPostState;
    console.log("fuuuuck")
    
  }
}
