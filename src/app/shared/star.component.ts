import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;    //@Input() saathe property binding thase
    cropWidth: number;  
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick():void{
        console.log(`The rating ${this.rating} was clicked`)
        this.ratingClicked.emit(`the rating ${this.rating} was clicked!`)
    }


    ngOnChanges(): void{        //only implemented when container data changes.
        this.cropWidth = this.rating * (76/5);
    }
}