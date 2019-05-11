import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FileReaderService {

    constructor() {
    }

    getFile(fileLocation: string) {
        const reader = new FileReader();

    }

}
