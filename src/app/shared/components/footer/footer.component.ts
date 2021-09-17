import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailFiel: FormControl;

  constructor() {
    this.emailFiel = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    // this.emailFiel.valueChanges
    //   .subscribe( value =>{
    //     console.log(value);
    //   });
   }

  ngOnInit(): void {
  }

  sendEmail(): any {
    if (this.emailFiel.value){

    }
  }
}
