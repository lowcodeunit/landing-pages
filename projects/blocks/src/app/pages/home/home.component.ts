import { Component, OnInit } from '@angular/core';import { LCUServiceSettings } from '@lcu/common';
;

@Component({
  selector: 'lcu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected settings: LCUServiceSettings) {
  }

  //  Life Cycle
  public ngOnInit(): void {}

  //  API Methods

  //  Helpers
}
