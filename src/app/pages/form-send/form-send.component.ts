import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-send',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-send.component.html',
  styleUrl: './form-send.component.scss'
})
export class FormSendComponent {

  constructor(private http: HttpClient) { }


  userId = new FormControl('')
  title = new FormControl('')
  body = new FormControl('')


  sendForm() {
    console.log('Форма отпрвилась');


    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      'userId': this.userId.value,
      'title': this.title.value,
      'body': this.body.value
    }
    ).subscribe((data) => console.log(data))
  }

}
