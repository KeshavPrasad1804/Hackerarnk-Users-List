import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Item } from "../../types/Item";

@Component({
  selector: "data-form",
  templateUrl: "./dataForm.component.html",
  styleUrls: ["./dataForm.component.scss"],
})
export class DataForm implements OnInit {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  name: string = "";
  genre: string = "";
  creator: string = "";
  option: string = "";
  time: number;
  item: Item;

  ngOnInit() {}
  addItem(name, genre, creator) {
    this.item = {
      name: name,
      genre: genre,
      creator: creator,
      type: this.option,
      totalTime: this.option === "Song" ? this.time : null,
    };
    this.onItemAdded.emit(this.item);
    this.resetData();
  }

  resetData(){
    this.name ="";
    this.genre ="";
    this.creator ="";
    this.option ="";
  }
}
