import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books: Book[]= [];
  constructor(private booksService: BooksService) {}


  isShowing: boolean = true;
  //cart: Book[] = [];
  // addtocart(event: Book){
  //   console.log(event)
  // }
  
  ngOnInit() {
    this.books = this.booksService.getBooks();

  }


  //isDisabled: boolean = false;

  // handleClick(){
  //   this.isDisabled = true
  // }

  //MyName: string= "";
  // handleInput(event:any){
  //  this.MyName= event.target.value;
  // }

}
