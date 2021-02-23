import { Component, OnChanges, OnInit, Injector, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LazyElementConfig } from '@lowcodeunit/lazy-element';
import { LandingPagesCallToActionContext } from './call-to-action.models';

export const SELECTOR_LANDING_PAGES_CALL_TO_ACTION_ELEMENT =
  'landing-pages-call-to-action-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_CALL_TO_ACTION_ELEMENT,
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class LandingPagesCallToActionElementComponent
  extends LcuElementComponent<LandingPagesCallToActionContext>
  implements OnChanges, OnInit {
  //  Fields

  //  Properties
  public BackgroundColorStyle: SafeHtml;

  @Input('element-configs')
  public ElementConfigs?: { [key: string]: LazyElementConfig };

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
