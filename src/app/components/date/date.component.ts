import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

    @Input()
    public from: Date;

    @Input()
    public to: Date;

    constructor() { }

    ngOnInit() {
    }
}


