import { Component, OnInit, Injector, HostBinding } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LandingPagesHomePageElementState {}

export class LandingPagesHomePageContext extends LCUElementContext<LandingPagesHomePageElementState> {}

export const SELECTOR_LANDING_PAGES_HOME_PAGE_ELEMENT = 'landing-pages-home-page-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_HOME_PAGE_ELEMENT,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class LandingPagesHomePageElementComponent extends LcuElementComponent<LandingPagesHomePageContext> implements OnInit {
  //  Fields

  //  Properties
  @HostBinding('class.landing-pages-home-page-element')
  public get ClassHomePageElement(): boolean {
    return true;
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
