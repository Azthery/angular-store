import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './component/contact/contact.component';
import { EmailValidatorComponent } from './component/email-validator/email-validator.component';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ContactComponent,
        EmailValidatorComponent,
    ],
    imports: [
        ContactRoutingModule,
        CommonModule,
        SharedModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class ContactModule { }
