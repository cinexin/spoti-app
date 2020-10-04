import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.css']
})
export class ErrorCardComponent implements OnInit {

  @Input() errorMessage?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
