import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Expense {
  name: string;
  amount: number;
  date: string;
  category: string;
  description: string;
  itemid: string;
}

@Component({
  selector: 'app-add-expense-form',
  imports: [FormsModule],
  templateUrl: './add-expense-form.html',
  styleUrl: './add-expense-form.css'
})
export class AddExpenseFormComponent {
  @Output() expenseAdded = new EventEmitter<Expense>();

  newExpense = {
    name: '',
    amount: 0,
    date: "",
    category: '',
    description: '',
    itemid: ''
  }


  addExpense() {
    const expense: Expense = {
      name: this.newExpense.name,
      amount: this.newExpense.amount,
      date: this.newExpense.date,
      category: this.newExpense.category,
      description: this.newExpense.description,
      itemid: this.generateId()
    };
    
    this.expenseAdded.emit(expense);
    this.clearForm();
  }

  clearForm() {
    this.newExpense = {name: '', amount: 0, date: '', category: '', description: '', itemid: ''};
  }

  generateId(): string {
    return Math.random().toString(36).substring(2, 7);
  }
  clearButton() {
  this.newExpense = {name: '', amount: 0, date: '', category: '', description: '', itemid: ''}
}
}