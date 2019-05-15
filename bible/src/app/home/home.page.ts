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
    private _subject: Subject<any>;
    testamentVersion = 'New';
    bibleBooks = this.bibleService.getNewTestamentBooks();
    numberOfChapters = [];


    constructor(private bibleService: BibleService) {
        this._subject = new Subject<any>();
        // this.numberOfChapters = this.bibleService.lookUpChapters('Matthew', this._testamentTrigger);
        this._subject.subscribe(value => {
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
        // const bookSelected = bookEvent.detail.value;
        // this.numberOfChapters = this.bibleService.lookUpChapters(bookSelected, this._testamentTrigger);
    }

    chapterChangeChange(chapter: any) {
        // const bookSelected = bookEvent.detail.value;
        // this.numberOfChapters = this.bibleService.lookUpChapters(bookSelected, this._testamentTrigger);
    }

    testamentChange(toggleEvent: any) {
        const value = toggleEvent.detail.checked;
        this._subject.next(value);
        this._testamentTrigger = value;
    }


}
