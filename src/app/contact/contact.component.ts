import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './InvalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com','yahoo.com']);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  

  submitForm(){
    console.log(this.contactForm.valid)
    // if(this.senderNameControl.dirty){
    //   alert('you changed the name field')
    // }
  }
}
