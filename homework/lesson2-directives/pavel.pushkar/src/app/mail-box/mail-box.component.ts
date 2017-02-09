import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
  @Input() word: string;
  
  public letters = [
    {
        sender: "Mary Puskin",
        text: "Современный стандарт JavaScript предоставляет много методов для …",
        time: 1486658000000
       
    },
    {
        sender: "Петр Кравчук",
        text: "A pipe takes in data as input and transforms it to a desired output...",
        time: 1486576208436
       
    },
    {
        sender: "Ляпис Трубецкой",
        text: "... indicates which date/time components to include...",
        time: 1481471108436
      
    },
    {
        sender: "John Holms",
        text: "...пробрасывать через @output() событие в дочерний компонент...",
        time: 1481471108436
      
    },
    {
        sender: "Петр Кравчук",
        text: "A pipe takes in data as input and transforms it to a desired output...",
        time: 1486599813755
       
    }
  ];  


  constructor() { 
    
  }


  ngOnInit() {
  }

}
