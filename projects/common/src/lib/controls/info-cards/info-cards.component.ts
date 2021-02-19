import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LandingPagesInfoCardContext } from '../info-card/info-card.models';
export const SELECTOR_LANDING_PAGES_INFO_CARDS_ELEMENT = 'landing-pages-info-cards-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_INFO_CARDS_ELEMENT,
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})
export class LandingPagesInfoCardsElementComponent extends LcuElementComponent<LandingPagesInfoCardContext[]> implements OnInit {
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
