import { Component } from '@angular/core';
import { LCUServiceSettings } from '@lcu/common';
import { AppHostToolbarState } from '@lowcodeunit/app-host-common';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //  Fields

  //  Properties
  public Toolbar: AppHostToolbarState;

  //  Constructors
  constructor() {}

  //  Life Cycle
  public ngOnInit(): void {
    this.Toolbar = {
      Title: 'IoT Ensemble Beta',
      Logo: './assets/logo.svg',
      Actions: [
        {
          Text: 'Home Page',
          Path: '/',
          Align: 'end',
        },
        {
          Text: 'Blocks',
          Path: '/blocks',
          Align: 'end',
        },
      ],
    };
  }

  //  API Methods

  //  Helpers
}
