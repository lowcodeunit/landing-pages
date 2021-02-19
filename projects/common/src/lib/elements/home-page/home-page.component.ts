import { Component, OnInit, Injector, HostBinding } from '@angular/core';
import {
  LCUElementContext,
  LcuElementComponent,
  LCUServiceSettings,
} from '@lcu/common';
import { LandingPagesHomePageContext } from './home-page.models';

export const SELECTOR_LANDING_PAGES_HOME_PAGE_ELEMENT =
  'landing-pages-home-page-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_HOME_PAGE_ELEMENT,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class LandingPagesHomePageElementComponent
  extends LcuElementComponent<LandingPagesHomePageContext>
  implements OnInit {
  //  Fields

  //  Properties

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

    if (!this.Context) {
      this.setContext();
    }
  }

  //  API Methods

  //  Helpers
  protected setContext(): void {
    this.Context = this.settings.State.LandingPage;
  }
}
