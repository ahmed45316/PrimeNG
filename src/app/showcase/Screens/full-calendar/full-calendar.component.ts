import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {
  events: any[];

  options: any;

  constructor() { }

  ngOnInit() {
    this.events = [
      {
        "title": "All Day Event",
        "start": "2017-01-01"
      },
      {
        "title": "Long Event",
        "start": "2017-01-07",
        "end": "2017-01-10"
      },
      {
        "title": "Repeating Event",
        "start": "2017-01-09T16:00:00"
      },
      {
        "title": "Repeating Event",
        "start": "2017-01-16T16:00:00"
      },
      {
        "title": "Conference",
        "start": "2017-01-11",
        "end": "2017-01-13"
      }
    ];
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2017-01-01',
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      editable: true
  };
  }

}
