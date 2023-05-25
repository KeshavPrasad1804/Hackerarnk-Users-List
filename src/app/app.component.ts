import { Component } from '@angular/core';
import { Item } from "../types/Item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  songItems: Item[] = [];
  bookItems: Item[] = [];
  books: string[] = []
  songs: string[] = []

  Book: string = 'Book';
  Song: string = 'Song';

  constructor() {

  }

  ngOnInit() {

  }

  onItemAdded(item) {

    if (item.type === "Book" && !this.books.includes(item.name)) {
      this.books.push(item.name)
      this.bookItems.push(item);
    }
    if (item.type === "Song" && !this.songs.includes(item.name)) {
      this.songs.push(item.name)
      this.songItems.push(item);
    }

  }

  onItemDelete(item) {

    if (item.type === "Book") {
      let findItemIndex = this.bookItems.findIndex((book: Item) => {
        return book.name == item.name;
      })
      let findname = this.books.findIndex((book: string) => {
        return book == item.name;
      })
      this.bookItems.splice(findItemIndex, 1);
      this.books.splice(findname, 1);
    }
    if (item.type === "Song") {
      let findItemIndex = this.bookItems.findIndex((song: Item) => {
        return song.name == item.name;
      })
      let findname = this.songs.findIndex((song: string) => {
        return song == item.name;
      })
      this.songItems.splice(findItemIndex, 1);
      this.songs.splice(findname, 1);
    }

  }
}
