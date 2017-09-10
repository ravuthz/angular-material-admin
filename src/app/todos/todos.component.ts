import { Component, OnInit } from '@angular/core';

import { JsonHolderService } from '../shares/services/json-holder/json-holder.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos: Array<any>;

    constructor(private json: JsonHolderService) { }

    ngOnInit() {
        this.loadTodos();
    }

    loadTodos() {
        this.json.getTodos().subscribe(res => this.todos = res);
    }

    doneTodo(i) {
        this.todos[i].completed = !this.todos[i].completed;
    }
}


