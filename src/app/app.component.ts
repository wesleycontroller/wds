import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  customOptions: string[] = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedOption: ['']
    });
  }
}
