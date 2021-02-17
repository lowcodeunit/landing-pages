import { Component, OnInit, Injector, HostBinding } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LandingPagesCallToActionContext } from '../../controls/call-to-action/call-to-action.models';
import { LandingPagesHeroContext } from '../../controls/hero/hero.modela';
import { LandingPagesInfoCardContext } from '../../controls/info-card/info-card.models';

export class LandingPagesHomePageElementState {}

export class LandingPagesHomePageContext extends LCUElementContext<LandingPagesHomePageElementState> {
  /**
   * Call to Action
   */
  public CallToAction?: LandingPagesCallToActionContext;

  /**
   * Hero model
   */
  public Hero?: LandingPagesHeroContext;

  /**
   * Card info
   */
  public InfoCards?: LandingPagesInfoCardContext[];
}
