import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BibleService {

    constructor(private http: HttpClient) {
    }

    private oldTestamentBooks = [{
        book: '1 Chronicles',
        value: '1Chronicles',
        file: './assets/bible/oldTestament/1Chronicles.json'
    }];


    private newTestamentBooks = [{
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


    // lookUpChapters(book: string, testament: boolean) {
    //     const numChapters = [];
    //     let fileUrl;
    //     if (testament) {
    //         fileUrl = Object(this.newTestamentBooks).filter(o => o.book === book)[0].file;
    //
    //     } else {
    //         fileUrl = Object(this.oldTestamentBooks).filter(o => o.book === book)[0].file;
    //
    //     }
    //
    //     this.http.get(fileUrl).subscribe(o => {
    //         for (let i = 1; i <= o.chapters.length; i++) {
    //             numChapters.push({value: i});
    //         }
    //     });
    //
    //     return numChapters;
    // }

}
