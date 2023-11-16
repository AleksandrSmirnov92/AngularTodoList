import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoForm } from './todo-form.component';

describe('TodoForm', () => {
  let component: TodoForm;
  let fixture: ComponentFixture<TodoForm>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoForm],
    });
    fixture = TestBed.createComponent(TodoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
