import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Email } from '../../interfaces/model.data';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public emailForm: FormGroup;
  public regexLetter: any= /([a-zA-Z])/g;
  public regexPhone: any = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  public regexEmail: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor( private fb: FormBuilder, private service: DataService ) { }

  public errorMessageResource: any = {
    name: {
      required: 'El nombre es requerido',
      pattern: 'Tu nombre debe contener solo letras'
    },
    phone: {
      required: 'El numero telefonico es requerido',
      pattern: 'Introduce un numero de telefono valido'
    },
    email: {
      required: 'El email es requerido',
      pattern: 'El email debe ser v@lido'
    },
    subject: {
      required: 'El motivo es requerido',
    },
    description: {
      required: 'La descripcion es requerida',
      minlength: 'Debe ser como minimo 30 caracteres',
      maxlength: 'Debe contener un maximo de 180 caracteres'
    }
  }
  
  public user: Email = {
    name: '',
    phone: null,
    email: '',
    subject: '',
    description: ''
  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      name : [ this.user.name, Validators.compose([Validators.required, Validators.pattern(this.regexLetter)])],
      phone: [ '', Validators.compose([Validators.required, Validators.pattern(this.regexPhone)])],
      email: [ '', Validators.compose([Validators.required, Validators.pattern(this.regexEmail)])],
      subject: [ '', Validators.compose([Validators.required])],
      description: [ '', Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(180)])]
    })
  }

  sendEmail(body: any) {
    console.log(this.emailForm.value);
    this.emailForm.reset();
    this.service.sendEmail(this.emailForm.value).subscribe(res => console.log(res));
  }

}
