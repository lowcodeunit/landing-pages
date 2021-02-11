import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import { LandingPagesModule, LandingPagesTemplateElementComponent, SELECTOR_LANDING_PAGES_TEMPLATE_ELEMENT } from '@lowcodeunit/landing-pages-common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    LandingPagesModule.forRoot()
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [LandingPagesModule]
})
export class AppModule implements DoBootstrap {
	constructor(protected injector: Injector) {}

	public ngDoBootstrap() {
		const template = createCustomElement(LandingPagesTemplateElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LANDING_PAGES_TEMPLATE_ELEMENT, template);
	}
}
