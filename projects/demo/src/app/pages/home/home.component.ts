import { Component, OnInit } from '@angular/core';
import { LandingPagesHomePageContext } from '@lowcodeunit/landing-pages-common';

@Component({
  selector: 'lcu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //  Fields

  //  Properties
  public HomePageLandingPageContext: LandingPagesHomePageContext;

  //  Constructors
  constructor() {}

  //  Life Cycle
  public ngOnInit(): void {
    this.HomePageLandingPageContext = {
      CallToAction: {
        Action: {
          Text: 'Sign up today',
          Target: '_blank',
          Path: '#',
        },
        Message:
          'To learn how fathym can save your brewery thousands of dollars in time and lost product.',
      },
      Hero: {
        BackgroundImage: 'assets/images/daniel-vogel-sVothhm7iRI-unsplash.jpg',
        Message:
          'Helps breweries develop solutions that can add a significant level of insight and reliability to brewing',
        SubTitle: 'for Breweries',
        Title: 'IoT Ensemble',
      },
      InfoCards: [
        {
          Icon: 'backup',
          Info:
            'Connect sensors to IoT Ensemble and collect real-time data in the cloud.',
          Title: 'Connect Sensors',
        },
        {
          Icon: 'insert_chart',
          Info:
            'Easily access data for use in 3rd party dashboards and reports.',
          Title: 'Access Data',
        },
      ],
      State: {},
    };
  }

  //  API Methods

  //  Helpers
}
