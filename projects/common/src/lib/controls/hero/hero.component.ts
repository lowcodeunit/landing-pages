import { Component, OnChanges, OnInit, Injector } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LandingPagesHeroContext } from './hero.models';

export const SELECTOR_LANDING_PAGES_HERO_ELEMENT = 'landing-pages-hero-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_HERO_ELEMENT,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class LandingPagesHeroElementComponent
  extends LcuElementComponent<LandingPagesHeroContext>
  implements OnChanges, OnInit {
  //  Fields

  //  Properties
  public BackgroundColorStyle: SafeHtml;

  //  Constructors
  constructor(protected injector: Injector, protected sanitizer: DomSanitizer) {
    super(injector);
  }

  //  Life Cycle
  public ngOnChanges() {
    this.setBackgroundColorStyle();
  }

  public ngOnInit() {
    super.ngOnInit();

    this.setBackgroundColorStyle();
  }

  //  API Methods

  //  Helpers
  protected setBackgroundColorStyle() {
    if (this.Context?.BackgroundColor) {
      this.BackgroundColorStyle = this.sanitizer.bypassSecurityTrustHtml(`
      <style>
        .hero-background:before {
          background-image: -webkit-linear-gradient(
            -75deg,
            ${this.Context.BackgroundColor} 50%,
            white 50%
          ) !important;
        }

        .lt-sm .hero-background:before {
          background-image: -webkit-linear-gradient(
            -75deg,
            ${this.Context.BackgroundColor} 75%,
            white 75%
          ) !important;
        }
      </style>
      `);
    } else {
      this.BackgroundColorStyle = '';
    }
  }
}
