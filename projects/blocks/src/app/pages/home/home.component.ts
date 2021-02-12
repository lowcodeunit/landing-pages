import { Component, OnInit } from '@angular/core';
import { LCUServiceSettings } from '@lcu/common';
import { LandingPageConfig } from '@lowcodeunit/landing-pages-common';
@Component({
  selector: 'lcu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //  Fields

  //  Properties
  public Config: LandingPageConfig;

  //  Constructors
  constructor() {}

  //  Life Cycle
  public ngOnInit(): void {}

  //  API Methods

  //  Helpers
}
