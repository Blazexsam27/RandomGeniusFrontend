import { QuestionStruct } from './../mainpage/question.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  question: QuestionStruct;

  constructor() {
    this.question = { id: -1, question: '', option1: '', option2: '', option3: '', option4: '', answer: '', category: '' };
  }

  ngOnInit() {
  }

}
