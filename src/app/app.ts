import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Expense {
  name: string;
  amount: number;
  date: string;
  category: string;
  description: string;
  itemid: string
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
activeItem = ''



newExpense = {
  name: '',
  amount: 0,
  date: "",
  category: '',
  description: '',
  itemid: ''
}

expenses: Expense[] = [
  {name: 'Starbucks Coffee', amount: 5.75, date: '2024-01-15', category: 'Food', description: 'Morning latte', itemid: 'A4X9K'},
  {name: 'Gas Station Fill-up', amount: 45.20, date: '2024-01-14', category: 'Transportation', description: 'Shell station', itemid: 'B7Y2M'},
  {name: 'Netflix Subscription', amount: 15.99, date: '2024-01-13', category: 'Entertainment', description: 'Monthly streaming', itemid: 'C8Z3N'},
  {name: 'Grocery Shopping', amount: 87.45, date: '2024-01-12', category: 'Food', description: 'Weekly groceries at Safeway', itemid: 'D9A4P'},
  {name: 'Electric Bill', amount: 120.00, date: '2024-01-11', category: 'Recurring Bills', description: 'PG&E monthly bill', itemid: 'E5B8Q'},
  {name: 'Lunch at Chipotle', amount: 12.50, date: '2024-01-10', category: 'Food', description: 'Burrito bowl', itemid: 'F6C9R'},
  {name: 'Movie Tickets', amount: 28.00, date: '2024-01-09', category: 'Entertainment', description: 'AMC Theater - 2 tickets', itemid: 'G7D1S'},
  {name: 'Spotify Premium', amount: 9.99, date: '2024-01-08', category: 'Subscriptions', description: 'Music streaming', itemid: 'H8E2T'},
  {name: 'Pizza Delivery', amount: 23.75, date: '2024-01-07', category: 'Food', description: 'Dominos large pepperoni', itemid: 'I9F3U'},
  {name: 'Uber Ride', amount: 18.45, date: '2024-01-06', category: 'Transportation', description: 'Airport to home', itemid: 'J1G4V'},
  {name: 'Internet Bill', amount: 65.00, date: '2024-01-05', category: 'Recurring Bills', description: 'Xfinity monthly', itemid: 'K2H5W'},
  {name: 'Coffee Shop', amount: 4.25, date: '2024-01-04', category: 'Food', description: 'Local cafe americano', itemid: 'L3I6X'},
  {name: 'Amazon Prime', amount: 14.99, date: '2024-01-03', category: 'Subscriptions', description: 'Monthly membership', itemid: 'M4J7Y'},
  {name: 'Parking Fee', amount: 8.00, date: '2024-01-02', category: 'Transportation', description: 'Downtown parking meter', itemid: 'N5K8Z'},
  {name: 'Dinner Date', amount: 65.30, date: '2024-01-01', category: 'Food', description: 'Italian restaurant', itemid: 'O6L9A'},
  {name: 'Phone Bill', amount: 85.00, date: '2023-12-31', category: 'Recurring Bills', description: 'Verizon monthly', itemid: 'P7M1B'},
  {name: 'Fast Food', amount: 9.85, date: '2023-12-30', category: 'Food', description: 'McDonalds drive-thru', itemid: 'Q8N2C'},
  {name: 'Concert Tickets', amount: 150.00, date: '2023-12-29', category: 'Entertainment', description: 'Taylor Swift concert', itemid: 'R9O3D'},
  {name: 'Adobe Creative', amount: 22.99, date: '2023-12-28', category: 'Subscriptions', description: 'Photoshop subscription', itemid: 'S1P4E'},
  {name: 'Water Bill', amount: 35.50, date: '2023-12-27', category: 'Recurring Bills', description: 'City utilities', itemid: 'T2Q5F'}
]

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
  this.activeItem = ''
}

addForm() {
 this.showAddForm = true
 this.activecategory = ''
}

categoryOptions() {
  return this.categories.filter(item => item != 'All Expenses')
}

addExpense() {
const newExpense = {
  name: this.newExpense.name,
  amount: this.newExpense.amount,
  date: this.newExpense.date,
  category: this.newExpense.category,
  description: this.newExpense.description,
  itemid: this.generateId()
}
this.expenses.push(newExpense)
  this.newExpense = {
  name: '',
  amount: 0,
  date: "",
  category: '',
  description: '',
  itemid: ''
}
}


clearButton() {
  this.newExpense = {name: '', amount: 0, date: '', category: '', description: '', itemid: ''}
}

filterCategory(cat: any) {
  return this.expenses.filter(expenses => expenses.category == cat)
}

itemDescription(itemid: any) {
  this.activeItem = itemid
}

generateId(): string {
  return Math.random().toString(36).substring(2, 7);
}

findItem(itemid: any) {
  return this.expenses.filter(expenses => expenses.itemid == itemid) 
}

}