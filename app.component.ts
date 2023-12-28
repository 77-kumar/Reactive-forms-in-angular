import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  submit = new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.minLength(5)]), 
    lastName : new FormControl('',[Validators.required,Validators.minLength(5)]),
    email : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',[Validators.minLength(6)]),





  })

  show(){
    console.log(this.submit)
  }

}
  


