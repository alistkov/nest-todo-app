import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Todo #1',
      description: 'Todo #1 description',
      createdAt: new Date(),
      updatedAt: null,
      completed: false,
    },
  ];

  create(createTodoDto: CreateTodoDto) {
    const createdTodo: Todo = { ...createTodoDto, id: this.todos.length };
    this.todos.push(createdTodo);
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found`);
    }
    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.findOne(id);
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found`);
    }

    const updatedTodo = { ...todo, ...updateTodoDto, updatedAt: new Date() };
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos[index] = updatedTodo;
  }

  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
