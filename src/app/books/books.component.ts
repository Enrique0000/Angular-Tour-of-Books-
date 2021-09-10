import { Component, OnInit } from '@angular/core';
import { Book } from "./book"
import { book2, book3, book4, book5, book6, book7 } from './mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  book1: Book = {
       id: 1,
       name: "Assassin's Creed - Black Flag"
  }
  Book2 = book2;
  Book3 = book3;
  Book4 = book4;
  Book5 = book5;
  Book6 = book6;
  Book7 = book7;

  constructor(){} 
  ngOnInit(): void {}

}
