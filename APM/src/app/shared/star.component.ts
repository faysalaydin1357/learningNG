import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";

@Component({
  selector : 'pm-star',
  templateUrl :'./star.component.html',
  styleUrls: ['./star.component.css']


})

export class StarComponent implements OnChanges {
  @Input() rating: number=4;
  starWidth: number;

  @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {

    this.starWidth = this.rating * 75/5;
}
  onClick(){

    this.ratingClicked.emit(`this rating was clicked: ${this.rating}`);

    console.log(`this rating was clicked: ${this.rating}`)
  }

}
