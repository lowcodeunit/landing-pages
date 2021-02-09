import { TemplateConfigModel } from './../../models/template-config.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lcu-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  /**
   * Template configuration
   */
  private _config: TemplateConfigModel;
  @Input('config')
  set Config(val: TemplateConfigModel) {
    if (!val) {
      return;
    }

    this._config = val;

  }
  get Config(): TemplateConfigModel {

    if (!this._config) {
      return;
    }
    return this._config;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
