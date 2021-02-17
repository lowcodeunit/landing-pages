import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LandingPagesInfoCardContext } from './info-card.models';

export const SELECTOR_LANDING_PAGES_INFO_CARD_ELEMENT = 'landing-pages-info-card-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_INFO_CARD_ELEMENT,
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class LandingPagesInfoCardElementComponent extends LcuElementComponent<LandingPagesInfoCardContext> implements OnInit {
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
