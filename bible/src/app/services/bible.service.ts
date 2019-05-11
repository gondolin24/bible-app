import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BibleService {

    constructor() {
    }

    private oldTestamentBooks = [{
        book: 'john',
        value: 'john',
    },
        {
            book: 'Eduardo',
            value: 'Eduardo',
        }
    ];

    getOldTestamentBooks() {
        return this.oldTestamentBooks;
    }

}