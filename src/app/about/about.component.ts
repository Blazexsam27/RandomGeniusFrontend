import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isSelected;
  @Input() profile: string;

  constructor() {
  }

  ngOnInit() {
    this.isSelected = false;
  }

  changeToDarkMode = () => {
    if (this.isSelected) {
      console.log('Dark theme');
    }
    console.log("click");
    console.log(this.isSelected);
  }

}
