import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myForm : FormGroup
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      "name"     : new FormControl("",Validators.required),
      "phoneNumber" : new FormControl("", [Validators.required, Validators.maxLength(10)]),
      "address"  : new FormGroup({
        "city"  : new FormControl ("",Validators.required),
        "state" : new FormControl ("",Validators.required)
        }),
      "check"     :  new FormControl()
    })
  }

  setDefault()
{
  this.myForm.setValue({
    name : "sabana",
    phoneNumber : "2322334478",
    address : {
      city : "Erode",
    state : "TamilNadu"
    },
    check : true

  })
}

patchValue(){
  this.myForm.patchValue({
    address:{
    city :"Coimbatore",
    state : "TN"
    }
  })
}
  onSubmit(){
    console.log(this.myForm)

  }

}
