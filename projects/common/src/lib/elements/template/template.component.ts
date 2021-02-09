import { LandingPageConfig } from '../../models/landing-page-config.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lcu-landingpage-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class LandingPageTemplateComponent implements OnInit {

  /**
   * Template configuration
   */
  private _config: LandingPageConfig;
  @Input('config')
  set Config(val: LandingPageConfig) {
    if (!val) {
      return;
    }

    this._config = val;

  }
  get Config(): LandingPageConfig {

    if (!this._config) {
      return;
    }
    return this._config;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
