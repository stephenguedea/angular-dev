import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todo: Todo[] = [];
  showValidationErrors: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
