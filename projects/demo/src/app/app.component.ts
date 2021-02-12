import { Component } from '@angular/core';
import { LCUServiceSettings } from '@lcu/common';
// import { AppHostToolbarState } from '@lowcodeunit/app-host-common';

// lowcodeunit/app-host

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
  constructor(protected settings: LCUServiceSettings) {
    this.Toolbar = settings.State.Toolbar;
  }

  //  Life Cycle
  public ngOnInit(): void {}

  //  API Methods

  //  Helpers
}
