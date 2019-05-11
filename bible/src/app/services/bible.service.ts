import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BibleService {

    constructor(private http: HttpClient) {
    }

    private oldTestamentBooks = [{
        book: 'john',
        value: 'john',
        file: 'blank'
    },
        {
            book: 'Eduardo',
            value: 'Eduardo',
            file: 'blank'
        }
    ];


    private newTestamentBooks = [{
        book: 'Matthew',
        value: 'Matthew',
        file: './assets/bible/newTestament/Matthew.json'
    },
        {
            book: 'Mark',
            value: 'Mark',
            file: 'blank'
        }
    ];

    getNewTestamentBooks() {

        return this.newTestamentBooks;
    }

    getOldTestamentBooks() {
        return this.oldTestamentBooks;
    }

    getChapterNumbers() {
        let numChapters = 0;
        this.http.get('./assets/bible/newTestament/Matthew.json')
            .subscribe(o => {
                numChapters = o.chapters.length;
            });
        // src/bible/newTestament/Matthew.json
        return numChapters;
    }
}
