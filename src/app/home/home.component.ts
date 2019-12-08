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
  toggle2;
  token;
  errors;
  loginInput;
  toggle = false;

  profileInfo = {
    username: '',
    email: ''
  }
  constructor(private userauth?: QuestionRetriverService) { }

  ngOnInit() {

    this.input = {
      username: '',
      email: '',
      password: ''
    };
    this.loginInput = {
      username: '',
      password: ''
    }
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
    this.userauth.loginUser(this.loginInput).subscribe(
      response => {
        this.token = response.token;
        this.errors = [];
        const tokenParts = this.token.split(/\./);
        const decodedToken = JSON.parse(window.atob(tokenParts[1]));
        console.log(decodedToken.username);
        this.profileInfo.username = decodedToken.username;
        this.profileInfo.email = decodedToken.email;
      },
      error => { console.log(error); }
    );
  }

  dropdownMenuToggle = () => {
    if (!this.toggle) {
      document.getElementById('dropdownMenu').style.display = 'block';
      document.getElementById('dropdownObjectContainer').style.display = 'block';
      this.toggle = true;

    }
    else {
      document.getElementById('dropdownMenu').style.display = 'none';
      document.getElementById('dropdownObjectContainer').style.display = 'none';
      this.toggle = false;

    }
  }

  revealAbout = () => {
    if (!this.toggle2) {
      document.getElementById('aboutPanel').style.display = 'block';
      this.toggle2 = true;
    }
    else {
      document.getElementById('aboutPanel').style.display = 'none';
      this.toggle2 = false;
    }
  }
}
