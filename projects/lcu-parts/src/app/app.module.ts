import { LandingPagesInfoCardsElementComponent } from '@lowcodeunit/landing-pages-common';
import { SELECTOR_LANDING_PAGES_INFO_CARDS_ELEMENT } from '@lowcodeunit/landing-pages-common';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings, MaterialModule } from '@lcu/common';
import { environment } from '../environments/environment';
import {
  LandingPagesModule,
  LandingPagesHeroElementComponent,
  SELECTOR_LANDING_PAGES_HERO_ELEMENT,
  LandingPagesInfoCardElementComponent,
  SELECTOR_LANDING_PAGES_INFO_CARD_ELEMENT,
  LandingPagesCallToActionElementComponent,
  SELECTOR_LANDING_PAGES_CALL_TO_ACTION_ELEMENT,
} from '@lowcodeunit/landing-pages-common';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHostModule } from '@lowcodeunit/app-host-common';
import { LazyElementModule } from '@lowcodeunit/lazy-element';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    FathymSharedModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LandingPagesModule,
    RouterModule.forRoot([]),
    AppHostModule,
    LazyElementModule.forRoot(),
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment),
    },
  ],
  exports: [LandingPagesModule],
})
export class AppModule implements DoBootstrap {
  constructor(protected injector: Injector) {}

  public ngDoBootstrap() {
    const hero = createCustomElement(LandingPagesHeroElementComponent, {
      injector: this.injector,
    });

    customElements.define(SELECTOR_LANDING_PAGES_HERO_ELEMENT, hero);

    const infoCard = createCustomElement(LandingPagesInfoCardElementComponent, {
      injector: this.injector,
    });

    customElements.define(SELECTOR_LANDING_PAGES_INFO_CARD_ELEMENT, infoCard);

    const callToAction = createCustomElement(
      LandingPagesCallToActionElementComponent,
      { injector: this.injector }
    );

    customElements.define(
      SELECTOR_LANDING_PAGES_CALL_TO_ACTION_ELEMENT,
      callToAction
    );

    const infoCards = createCustomElement(
      LandingPagesInfoCardsElementComponent,
      { injector: this.injector }
    );

    customElements.define(SELECTOR_LANDING_PAGES_INFO_CARDS_ELEMENT, infoCards);
  }
}
