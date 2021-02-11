import { Component, OnInit, Injector, Input } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LandingPageConfig } from '../../models/landing-page-config.model';

export class LandingPagesTemplateElementState {}

export class LandingPagesTemplateContext extends LCUElementContext<LandingPagesTemplateElementState> {}

export const SELECTOR_LANDING_PAGES_TEMPLATE_ELEMENT = 'landing-pages-template-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_TEMPLATE_ELEMENT,
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class LandingPagesTemplateElementComponent extends LcuElementComponent<LandingPagesTemplateContext> implements OnInit {
  //  Fields
  /**
   * Template configuration
   */
  protected _config: LandingPageConfig;

  //  Properties
  @Input('config')
  public set Config(val: LandingPageConfig) {
    if (!val) {
      return;
    }

    this._config = val;

  }

  public get Config(): LandingPageConfig {

    if (!this._config) {
      return;
    }
    return this._config;
  }


  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
