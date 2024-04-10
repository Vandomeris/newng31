import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-send',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-send.component.html',
  styleUrl: './form-send.component.scss'
})
export class FormSendComponent {

  constructor(private http: HttpClient) { }

  createPostForm = new FormGroup({
    userId: new FormControl<string>(''),
    title: new FormControl<string>(''),
    body: new FormControl<string>('')
  })

  test = new FormControl('')






  sendForm() {
    console.log('Форма отпрвилась');
    console.log(this.createPostForm.value);

    this.http.post('https://jsonplaceholder.typicode.com/posts', this.createPostForm.value
    ).subscribe((data) => console.log(data))
  }

}
