import { Component, OnInit, Injector, HostBinding } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LandingPagesCallToActionContext } from '../../controls/call-to-action/call-to-action.models';
import { LandingPagesHeroContext } from '../../controls/hero/hero.models';
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
   * Hero model
   */
  public HeroCallToAction?: LandingPagesCallToActionContext;

  /**
   * Card info
   */
  public InfoCards?: LandingPagesInfoCardContext[];
}
