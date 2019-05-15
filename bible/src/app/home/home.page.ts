import {Component} from '@angular/core';
import {Subject} from 'rxjs';
import {BibleService} from '../services/bible.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private _testamentTrigger = true;
    private _testamentSubject: Subject<any>;
    testamentVersion = 'New';
    bibleBooks = this.bibleService.getNewTestamentBooks();
    numberOfChapters = [];

    placeholer = 't';


    constructor(private bibleService: BibleService) {
        this._testamentSubject = new Subject<any>();
        // this.numberOfChapters = this.bibleService.lookUpChapters('Matthew', this._testamentTrigger);
        this._testamentSubject.subscribe(value => {
                this._testamentTrigger = value;
                if (value) {
                    this.bibleBooks = this.bibleService.getNewTestamentBooks();
                    this.testamentVersion = 'New';
                } else {
                    this.bibleBooks = this.bibleService.getOldTestamentBooks();
                    this.testamentVersion = 'Old';
                }
            }
        );
    }

    get testamentTrigger(): boolean {
        return this._testamentTrigger;
    }


    bookChange(bookEvent: any) {
        this.placeholer = bookEvent.detail.value;
        this.bibleService.lookUpChapters(this.placeholer, this._testamentTrigger);
        // const bookSelected = bookEvent.detail.value;
        // this.numberOfChapters = this.bibleService.lookUpChapters(bookSelected, this._testamentTrigger);
    }


    chapterChangeChange(chapter: any) {
        // const bookSelected = bookEvent.detail.value;
        // this.numberOfChapters = this.bibleService.lookUpChapters(bookSelected, this._testamentTrigger);
    }

    testamentChange(toggleEvent: any) {
        const value = toggleEvent.detail.checked;
        this._testamentSubject.next(value);
    }


}
