import { Component, input } from '@angular/core';

interface BookType{
  book_name: string
  book_author:string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  list_name: string = "My Books"
  input_name: string = "--"
  input_author: string = "--"
  set_value: string = "__"
  books:BookType[] = []

  set_my_value(){
    this.books.push({book_name:this.input_name, book_author:this.input_author })
    this.set_value = this.input_name + " " + this.input_author

  }
  constructor() {}
  
}
