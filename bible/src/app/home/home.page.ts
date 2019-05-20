import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {BibleBook, BibleService} from '../services/bible.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    private _testamentTrigger = true;
    private _testamentSubject: Subject<any>;
    private _bookSubject: Subject<any>;
    testamentVersion = 'New';
    bibleBooks = this.bibleService.getNewTestamentBooks();
    numberOfChapters = [{
        value: '1'
    }];

    placeholer;
    random = '1';
    private selectedBook;

    yy = 0;

    constructor(private bibleService: BibleService) {

        this._testamentSubject = new Subject<any>();
        this._bookSubject = new Subject<any>();

        this._bookSubject.subscribe(bookValue => {
            this.selectedBook = bookValue;
            this.bibleService.lookUpChapters(bookValue, this._testamentTrigger).then(o => {
                this.random = '9';
                o.subscribe((y: BibleBook) => {
                    for (let index = 2; index <= y.chapters.length + 20; index++) {
                        this.numberOfChapters.push({value: index.toString()});
                    }
                    // for (let index = 0; index < this.yy; index++) {
                    this.numberOfChapters = this.numberOfChapters.reverse();
                    setTimeout(() => {
                        console.log('decrease');
                        for (let ii = 0; ii < 5; ii++) {
                            console.log(this.numberOfChapters);
                            this.numberOfChapters = this.numberOfChapters.slice(3);
                        }
                    }, 5000);

                    // }
                });

            });
        });

        // this.numberOfChapters = this.bibleService.lookUpChapters('Matthew', this._testamentTrigger);
        this._testamentSubject.subscribe(value => {
                this._testamentTrigger = value;
                if (value) {
                    this.random = '9';
                    this.bibleBooks = this.bibleService.getNewTestamentBooks();
                    this.testamentVersion = 'New';
                } else {
                    this.random = '5';
                    this.bibleBooks = this.bibleService.getOldTestamentBooks();
                    this.testamentVersion = 'Old';
                }
            }
        );
        this.bookChange('Matthew');
    }

    get testamentTrigger(): boolean {
        return this._testamentTrigger;
    }


    bookChange(bookEvent: any) {
        let currentBook = bookEvent;
        if (bookEvent.detail) {
            currentBook = bookEvent.detail.value;
        }
        this._bookSubject.next(currentBook);

    }


    chapterChangeChange(chapter: any) {
        // const bookSelected = bookEvent.detail.value;
        // this.numberOfChapters = this.bibleService.lookUpChapters(bookSelected, this._testamentTrigger);
    }

    testamentChange(toggleEvent: any) {
        const value = toggleEvent.detail.checked;
        this._testamentSubject.next(value);
    }

    fuck(hi: any) {
        this.yy = hi.detail.value;
    }

    ngOnInit(): void {

    }


}
