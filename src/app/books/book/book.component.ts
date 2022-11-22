import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book ={} as Book;
  //@Output() bookEmitter = new EventEmitter<Book>();

  isInCart:boolean=false;

  addtocart(){
    this.isInCart=true;
    this.cartService.add(this.book);
    //this.bookEmitter.emit(this.book);
  }

  removefromcart(){
    this.isInCart=false;
    this.cartService.remove(this.book);
  }
  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
