import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LandingPagesCallToActionContext } from './call-to-action.models';

export const SELECTOR_LANDING_PAGES_CALL_TO_ACTION_ELEMENT = 'landing-pages-call-to-action-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_CALL_TO_ACTION_ELEMENT,
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class LandingPagesCallToActionElementComponent extends LcuElementComponent<LandingPagesCallToActionContext> implements OnInit {
  //  Fields

  //  Properties

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
