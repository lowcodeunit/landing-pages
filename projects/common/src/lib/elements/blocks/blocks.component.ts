import { Component, OnInit, Injector, Input } from '@angular/core';
import { LcuElementComponent, LCUServiceSettings } from '@lcu/common';
import { LandingPagesBlocksContext } from './blocks.models';

export const SELECTOR_LANDING_PAGES_BLOCKS_ELEMENT =
  'landing-pages-blocks-element';

@Component({
  selector: SELECTOR_LANDING_PAGES_BLOCKS_ELEMENT,
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class LandingPagesBlocksElementComponent
  extends LcuElementComponent<LandingPagesBlocksContext>
  implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(
    protected injector: Injector,
    protected settings: LCUServiceSettings
  ) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    console.log(`Loading blocks...`);
    console.log(this.Context);

    if (!this.Context) {
      this.setContext();
    }
  }

  //  API Methods

  //  Helpers
  protected setContext(): void {
    console.log(`Setting initial from state...`);
    console.log(this.settings.State);

    this.SetContext(this.settings.State.LandingPage);
  }
}
