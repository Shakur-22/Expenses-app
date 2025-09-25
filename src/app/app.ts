import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Expense {
  amount: number;
  date: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('budgetapp');

activecategory = 'All Expenses'
showAddForm = false

newExpense = {
  amount: 0,
  date: "",
  category: '',
  description: ''

}

expenses:  Expense[] = []

categories = [
  'All Expenses',
  'Recurring Bills',
  'Food',
  'Subscriptions',
  'Entertainment'
]

selectCategory(category: string) {
  this.showAddForm = false
  this.activecategory = category
}

test() {
 this.showAddForm = true
 this.activecategory = ''
}

categoryOptions() {
  return this.categories.filter(item => item != 'All Expenses')
}

addExpense() {
  this.expenses.push(this.newExpense)
  this.newExpense = {amount: 0, date: '', category: '', description: ''}
}

filterCategory(cat: any) {
  return this.expenses.filter(expenses => expenses.category == cat)
}

}