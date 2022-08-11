import { Todo } from "./todo.interface";

export class DataService {
  todos: Todo[] = [];

  constructor() {

  }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

}
