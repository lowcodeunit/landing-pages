import {
  Component,
  OnChanges,
  OnInit,
  Injector,
  HostBinding,
} from '@angular/core';
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
  implements OnChanges, OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnChanges() {
    this.setContext();
  }

  public ngOnInit() {
    super.ngOnInit();

    this.setContext();
  }

  //  API Methods

  //  Helpers
  protected setContext(): void {
    if (this.Context && this.Context?.CallToAction) {
      this.Context.CallToAction.ElementConfigs = this.Context.ElementConfigs;
    }

    if (this.Context && this.Context?.HeroCallToAction) {
      this.Context.HeroCallToAction.ElementConfigs = this.Context.ElementConfigs;
    }
  }
}
