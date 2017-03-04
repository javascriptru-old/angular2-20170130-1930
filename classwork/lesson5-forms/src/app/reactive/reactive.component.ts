import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public name = new FormControl('Bob', [myValidator(3)]);
  public userForm;

  constructor(private _fb: FormBuilder) {
    //this.name.valueChanges.subscribe(query => http.get(query))

    // this.userForm = this._fb.group({
    //   name : ['Bob'],
    //   password: this._fb.group({
    //     password: '',
    //     confirmPassword: '',
    //   })
    // });
  }

  ngOnInit() {
  }

}

function myValidator(donotdothatmore) {
  return function myValidator(control: FormControl) {

    if(control.value.length > donotdothatmore){
      return { myValidator: { text: 'Something went wrong'} }
    }
    return null;

  }
}

