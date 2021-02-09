import { CallToActionModel } from './../../../../../common/src/lib/models/call-to-action.model';
import { Component, OnInit } from '@angular/core';
import { LCUServiceSettings } from '@lcu/common';
import { HeroContainerModel, InfoCardModel, LandingPageConfig } from '@lowcodeunit/landing-pages-common';
@Component({
  selector: 'lcu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //  Fields

  //  Properties
  public Config: LandingPageConfig;
  //  Constructors
  constructor(protected settings: LCUServiceSettings) {}

  //  Life Cycle
  public ngOnInit(): void {
    this.setConfig();
  }

  //  API Methods

  //  Helpers

  protected setConfig(): void {

    this.Config = new LandingPageConfig();

    const hero: HeroContainerModel = new HeroContainerModel();
    hero.Title = 'IoT Ensemble';
    hero.SubTitle = 'for Breweries';
    hero.Message = 'Helps breweries develop solutions that can add a significant level of insight and reliability to brewing';

    const callToAction: CallToActionModel = new CallToActionModel();
    callToAction.Label = 'Sign up today';
    callToAction.Message = 'To learn how fathym can save your brewery thousands of dollars in time and lost product.';

    const infoCards: Array<InfoCardModel> = [
      {
        Icon: 'backup',
        Info: 'Connect sensors to IoT Ensemble and collect real-time data in the cloud.',
        Title: 'Connect Sensors'
      },
      {
        Icon: 'insert_chart',
        Info: 'Easily access data for use in 3rd party dashboards and reports.',
        Title: 'Access Data'
      }
    ];

    this.Config.CallToAction = callToAction;
    this.Config.HeroContainer = hero;
    this.Config.InfoCards = infoCards;
  }
}
