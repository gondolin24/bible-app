import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BibleService {

    constructor(private http: HttpClient) {
    }

    private oldTestamentBooks: BookMetaData[] = [{
        book: '1 Chronicles',
        value: '1Chronicles',
        file: './assets/bible/oldTestament/1Chronicles.json'
    },
        {
            book: '2 Chronicles',
            value: '2Chronicles',
            file: './assets/bible/oldTestament/2Chronicles.json'
        }];


    private newTestamentBooks: BookMetaData[] = [{
        book: 'Matthew',
        value: 'Matthew',
        file: './assets/bible/newTestament/Matthew.json'
    },
        {
            book: 'Mark',
            value: 'Mark',
            file: './assets/bible/newTestament/Mark.json'
        }
    ];

    getNewTestamentBooks() {

        return this.newTestamentBooks;
    }

    getOldTestamentBooks() {
        return this.oldTestamentBooks;
    }


    lookUpChapters(book: string, testament: boolean) {
        // let fileUrl;
        let fileLocation;
        if (testament) {
            fileLocation = Object(this.newTestamentBooks).filter(current => current.value === book)[0].file;
        } else {
            fileLocation = Object(this.oldTestamentBooks).filter(current => current.value === book)[0].file;
        }

        return Promise.resolve(this.http.get(fileLocation));
    }

}

interface BookMetaData {
    book?: string;
    value?: string;
    file?: string;
}

export interface BibleBook {
    book?: string;
    chapters?: [];
}
