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

    constructor(private bibleService: BibleService) {
        this._subject = new Subject<any>();
        this._subject.subscribe(value => {
                if (value) {
                    this.testamentVersion = 'New';
                } else {
                    this.testamentVersion = 'Old';
                }
            }
        );
    }

    get testamentTrigger(): boolean {
        return this._testamentTrigger;
    }

    getBooks() {
        return this.bibleService.getOldTestamentBooks();
    }

    testamentChange(toggleEvent: any) {
        const value = toggleEvent.detail.checked;
        this._subject.next(value);
        this._testamentTrigger = value;
    }

}
