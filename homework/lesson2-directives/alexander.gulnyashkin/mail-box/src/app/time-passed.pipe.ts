import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {
    minutes (minutes: number): string {
        minutes = Math.ceil(minutes / 60);
        if (minutes % 10 > 4 || minutes % 10 === 0) return minutes + ' минут назад';
        if (minutes % 10 < 2) return minutes + ' минуту назад';
        else return minutes + ' минуты назад';
    }
    hours (hours: number): string {
        hours = Math.ceil(hours / 3600);
        if (hours % 10 > 4 || hours % 10 === 0) return hours + ' часов назад';
        if (hours % 10 < 2) return hours + ' час назад';
        else return hours + ' часа назад';
    }
    days (days: number): string {
        days = Math.ceil(days / 3600 / 24);
        if (days % 10 > 4 || days % 10 === 0) return days + ' дней назад';
        if (days % 10 < 2) return days + ' день назад';
        else return days + ' дня назад';
    }
    years (years: number): string {
        years = Math.ceil(years / 3600 / 24 / 365);
        if (years % 10 > 4 || years % 10 === 0) return years + ' лет назад';
        if (years % 10 < 2) return years + ' год назад';
        else return years + ' года назад';
    }
    transform(date: Date): string {
        let timePassed = (Date.now() - new Date(date).getTime()) / 1000;
        if (timePassed < 1) return '1 секунду назад';
        if (timePassed < 60) return 'Менее 1 минуты назад';
        if (timePassed < 3600) return this.minutes(timePassed);
        if (timePassed < 3600 * 24) return this.hours(timePassed);
        if (timePassed < 3600 * 24 * 365) return this.days(timePassed);
        else return this.years(timePassed);
    }

}
