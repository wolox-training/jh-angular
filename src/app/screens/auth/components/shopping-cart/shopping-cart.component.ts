import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ShoppingCartComponent>, @Inject(MAT_DIALOG_DATA) public data: Array<Book>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  removeBook(book: Book) {
    const index = this.data.findIndex(x => x === book);
    this.data.splice(index, 1);
  }

}
