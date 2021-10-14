import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css']
})
export class ContactUsPageComponent implements OnInit {
 signUpForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email])
  })

  constructor() { 
  }

  ngOnInit(): void {
  }
  
  get email(){return this.signUpForm.get('email')}

}
