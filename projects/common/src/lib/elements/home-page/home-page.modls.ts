import { Component, OnInit, Injector, HostBinding } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { CallToActionModel } from '../../models/call-to-action.model';
import { HeroModel } from '../../models/hero.model';
import { InfoCardModel } from '../../models/info-card.model';

export class LandingPagesHomePageElementState {}

export class LandingPagesHomePageContext extends LCUElementContext<LandingPagesHomePageElementState> {
  /**
   * Call to Action
   */
  public CallToAction?: CallToActionModel;

  /**
   * Hero model
   */
  public Hero?: HeroModel;

  /**
   * Card info
   */
  public InfoCards?: InfoCardModel[];
}
