import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LandingPagesHeroContext } from './hero.modela';

export const SELECTOR_LANDING_PAGES_HERO_ELEMENT = 'landing-pages-hero-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_HERO_ELEMENT,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class LandingPagesHeroElementComponent extends LcuElementComponent<LandingPagesHeroContext> implements OnInit {
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
