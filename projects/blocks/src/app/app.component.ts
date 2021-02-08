import { Component } from '@angular/core';
// import { AppHostToolbarState } from '@lowcodeunit/app-host-common';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //  Fields

  //  Properties
  public Toolbar: any;

  //  Constructors
  constructor() {
    this.Toolbar = {
      Title: 'IoT Ensemble Beta',
      Logo: './assets/logo.svg',
      Actions: [
        {
          Text: 'Docs',
          Path: '/docs',
          Align: 'start',
          Target: '_blank',
        },
        {
          Text: 'Sign Out',
          Path: '/.oauth/logout',
          Align: 'end',
        },
      ],
    };
  }

  //  Life Cycle
  public ngOnInit(): void {}

  //  API Methods

  //  Helpers
}
