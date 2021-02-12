import { Component, OnInit, Injector, Input } from '@angular/core';
import {
  LCUElementContext,
  LcuElementComponent,
  LCUServiceSettings,
} from '@lcu/common';
import { LandingPageConfig } from '../../models/landing-page-config.model';

export class LandingPagesTemplateElementState {}

export class LandingPagesTemplateContext extends LCUElementContext<LandingPagesTemplateElementState> {}

export const SELECTOR_LANDING_PAGES_TEMPLATE_ELEMENT =
  'lcu-landing-pages-template-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_TEMPLATE_ELEMENT,
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class LandingPagesTemplateElementComponent
  extends LcuElementComponent<LandingPagesTemplateContext>
  implements OnInit {
  //  Fields

  //  Properties
  @Input('config')
  public Config: LandingPageConfig;

  //  Constructors
  constructor(
    protected injector: Injector,
    protected settings: LCUServiceSettings
  ) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    if (!this.Config) {
      this.setConfig();
    }
  }

  //  API Methods

  //  Helpers
  protected setConfig(): void {
    this.Config = this.settings.State.LandingPage;
  }
}
