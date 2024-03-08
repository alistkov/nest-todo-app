import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    return await this.todoRepository.save(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: string) {
    const todo = await this.todoRepository.findOne({
      where: { id: parseInt(id, 10) },
    });
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found`);
    }
    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.preload({
      id: parseInt(id, 10),
      ...updateTodoDto,
    });
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found`);
    }
    return this.todoRepository.save(todo);
  }

  async remove(id: string) {
    const todo = await this.findOne(id);
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found`);
    }
    return this.todoRepository.remove(todo);
  }
}
