import { QuestionRetriverService } from './../question-retriver.service';
import { QuestionStruct } from './../mainpage/question.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  Question: QuestionStruct;

  constructor(private http: QuestionRetriverService) {
    this.Question = { id: -1, question: '', option1: '', option2: '', option3: '', option4: '', answer: '', category: '' };
  }

  ngOnInit() {
  }

  questionSubmission() {
    this.http.SubmitQuestion(this.Question).subscribe(
      response => {
        alert("SUCCESSFULLY SUBMITTED!");
      },
      error => {
        console.log(error);
      }
    )
  }

}
