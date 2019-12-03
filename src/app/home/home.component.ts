import { QuestionRetriverService } from './../question-retriver.service';
import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [QuestionRetriverService]
})
export class HomeComponent implements OnInit {
  @Input() color: ThemePalette;

  input;
  loginInput;
  constructor(private userauth: QuestionRetriverService) { }

  ngOnInit() {
    this.input = {
      username: '',
      email: '',
      password: ''
    };
  }

  register = () => {

    this.userauth.registerUser(this.input).subscribe(
      response => {
        alert('SUCCESSFULLY REGISTERED!');
      },
      error => { console.log(error) }
    )
  }

  login = () => {
    this.userauth.loginUser(this.input).subscribe(
      response => {
        alert('SUCCESSFULLY LOGGED IN!');
        console.log(response);
      },
      error => {
        if (error.statusText == "Bad Request")
          alert('User Does not Exist!');
        else console.log(error);
      }
    )
  }
}
