import { HomeComponent } from './../home/home.component';
import { QuestionRetriverService } from './../question-retriver.service';
import { QuestionStruct } from './question.interface';
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *',
        [
          style({ backgroundColor: 'white', opacity: 0 }),
          animate(2000, style({ backgroundColor: 'grey', opacity: 1 }))
        ]
      )
    ]),
    trigger('slideInOut', [
      transition(':enter', [style({ transform: 'translateX(200%)' }),
      animate('900ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [style({ transform: 'translateX(200%)' }),
      animate('900ms ease-in', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ],
  providers: [QuestionRetriverService]
})
export class MainpageComponent implements OnInit {

  questions: QuestionStruct[];
  selectedCategory = 'Random';
  index: number;
  points = 0;
  Mathematics;
  Science;
  GK;
  Random;
  category;

  constructor(private api: QuestionRetriverService) {
    this.index = 0;
    this.questions = [{ id: 1, question: '', option1: '', option2: '', option3: '', option4: '', answer: '', category: '' }]
    this.getQuestion();
  }
  ngOnInit() {
    this.Mathematics = false;
    this.Science = false;
    this.GK = false;
    this.Random = false;
    this.category = {
      Mathematics: 'Questions are Based on ancient mathematics.',
      Random: 'There will be Random Questions',
      Science: 'Questions are Based on NASA level Science',
      GK: 'Questions are Based on GK',
    }
    document.getElementById('categoryInfoDisplayer').innerHTML = this.category[this.selectedCategory];
  }

  changeCategory = (category) => {
    this.selectedCategory = category;
    document.getElementById('categoryInfoDisplayer').innerHTML = this.category[this.selectedCategory];
    this.getQuestion();
  }

  getQuestion = () => {
    this.api.getAllQuestions().subscribe(
      data => {
        this.filterQuestions(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  filterQuestions = (data) => {
    let temp = [];
    for (let x of data) {
      if (x.category == this.selectedCategory)
        temp.push(x);
    }
    if (this.questions == undefined || temp.length == 0)
      this.questions = data;
    else {
      this.questions = temp;
    }

  }

  checkAnswer = (id, choice) => {
    if (choice == this.questions[id].answer.toString()) {
      this.points++;
    }
    this.index++;
    if (this.index == this.questions.length) {
    }
  }

  replay = () => {
    this.index = 0;
    this.points = 0;
    this.Mathematics = false;
    this.Science = false;
    this.GK = false;
    this.Random = false;
    this.getQuestion();
    this.hidQuestions();
  }

  showQuestions = () => {
    document.getElementById('container').style.display = 'block';
    document.getElementById('startbtn').style.display = 'none';
    document.getElementById('categoryInfoDisplayer').style.display = 'none';
    if (this.selectedCategory == 'Mathematics') {
      this.Science = true;
      this.GK = true;
      this.Random = true;
    }
    if (this.selectedCategory == 'GK') {
      this.Mathematics = true;
      this.Science = true;
      this.Random = true;
    }

    if (this.selectedCategory == 'Science') {
      this.Mathematics = true;
      this.GK = true;
      this.Random = true;
    }

    if (this.selectedCategory == 'Random') {
      this.Mathematics = true;
      this.Science = true;
      this.GK = true;
    }
  }

  hidQuestions = () => {
    document.getElementById('container').style.display = 'none';
    document.getElementById('categoryInfoDisplayer').style.display = 'block';
    document.getElementById('startbtn').style.display = 'block';
  }

}
