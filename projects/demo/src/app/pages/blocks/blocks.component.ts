import { Component, OnInit } from '@angular/core';
import { LandingPagesBlocksContext } from '@lowcodeunit/landing-pages-common';

@Component({
  selector: 'lcu-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent implements OnInit {
  //  Fields

  //  Properties
  public BlocksLandingPageContext: LandingPagesBlocksContext;

  //  Constructors
  constructor() {}

  //  Life Cycle
  public ngOnInit(): void {
    this.BlocksLandingPageContext = {
      CallToAction: {
        Action: {
          Text: 'Sign up today',
          Target: '_blank',
          Path: '#',
          Raised: true,
          ButtonColor: 'primary'
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
    };
  }

  //  API Methods

  //  Helpers
}
