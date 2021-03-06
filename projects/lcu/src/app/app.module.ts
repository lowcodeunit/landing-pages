import { LandingPagesInfoCardsElementComponent } from '@lowcodeunit/landing-pages-common';
import { SELECTOR_LANDING_PAGES_INFO_CARDS_ELEMENT } from '@lowcodeunit/landing-pages-common';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FathymSharedModule,
  LCUServiceSettings,
  MaterialModule,
} from '@lcu/common';
import { environment } from '../environments/environment';
import {
  LandingPagesModule,
  LandingPagesBlocksElementComponent,
  SELECTOR_LANDING_PAGES_BLOCKS_ELEMENT,
  LandingPagesHomePageElementComponent,
  SELECTOR_LANDING_PAGES_HOME_PAGE_ELEMENT,
} from '@lowcodeunit/landing-pages-common';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHostModule } from '@lowcodeunit/app-host-common';
import { LazyElementModule } from '@lowcodeunit/lazy-element';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    FathymSharedModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([]),
    LandingPagesModule,
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
    const blocks = createCustomElement(LandingPagesBlocksElementComponent, {
      injector: this.injector,
    });

    customElements.define(SELECTOR_LANDING_PAGES_BLOCKS_ELEMENT, blocks);

    const homePage = createCustomElement(LandingPagesHomePageElementComponent, {
      injector: this.injector,
    });

    customElements.define(SELECTOR_LANDING_PAGES_HOME_PAGE_ELEMENT, homePage);
  }
}
