import { Pipe, PipeTransform } from '@angular/core';
import { Letter } from './mail-box/letter/letter.component';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(letters: Array <Letter> , searchFilter: string): Array <Letter> {
        letters.forEach((letter: Letter): void => {
            letter.highlightedName = letter.name;
            letter.highlightedEmail = letter.email;
            letter.highlightedContent = letter.content;
        });
        if (searchFilter === '') {
            return letters;
        }
        return letters.filter((letter: Letter): boolean => {
            let flag: boolean = false,
                reg: RegExp = new RegExp(searchFilter, 'gi');
            if (letter.name.toLowerCase().includes(searchFilter.toLowerCase())) {
                letter.highlightedName = '';
                let splitedStr = letter.name.split(reg);
                splitedStr.forEach((piece, i) => {
                    if (i === splitedStr.length - 1) {
                        letter.highlightedName += piece;
                    } else {
                        letter.highlightedName += piece + '<i class="highlight">' + letter.name.match(reg)[i] + '</i>';
                    }
                });
                flag = true;
            }
            if (letter.email.toLowerCase().includes(searchFilter.toLowerCase())) {
                letter.highlightedEmail = '';
                let splitedStr = letter.email.split(reg);
                splitedStr.forEach((piece, i) => {
                    if (i === splitedStr.length - 1) {
                        letter.highlightedEmail += piece;
                    } else {
                        letter.highlightedEmail += piece + '<i class="highlight">' + letter.email.match(reg)[i] + '</i>';
                    }
                });
                flag = true;
            }
            if (letter.content.toLowerCase().includes(searchFilter.toLowerCase())) {
                letter.highlightedContent = '';
                let splitedStr = letter.content.split(reg);
                splitedStr.forEach((piece, i) => {
                    if (i === splitedStr.length - 1) {
                        letter.highlightedContent += piece;
                    } else {
                        letter.highlightedContent += piece + '<i class="highlight">' + letter.content.match(reg)[i] + '</i>';
                    }
                });
                flag = true;
            }
            return flag;
        });
    }
}
