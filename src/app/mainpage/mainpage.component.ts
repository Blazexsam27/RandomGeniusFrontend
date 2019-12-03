import { MatRadioModule, MatRadioButton } from '@angular/material/radio';
import { HttpClient } from '@angular/common/http';
import { QuestionRetriverService } from './../question-retriver.service';
import { QuestionStruct } from './question.interface';
import { Component, OnInit, Input } from '@angular/core';
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
  @Input() selected: MatRadioButton;
  selectedCategory = 'Random';
  index: number;
  points = 0;

  constructor(private api: QuestionRetriverService) {
    this.index = 0;
    this.questions = [{ id: 1, question: '', option1: '', option2: '', option3: '', option4: '', answer: '', category: '' }]
    this.getQuestion();
  }
  ngOnInit() {
  }

  changeCategory = (category) => {
    this.selectedCategory = category;
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
    this.getQuestion();
  }

}
