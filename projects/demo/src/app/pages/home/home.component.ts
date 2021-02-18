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
      Hero: {
        Message: `Don't wait for the right hire, use the team you have.  Take control of Cloud.`,
        SubTitle: 'Virtual Developers',
        Title: 'Fathym Cloud',
        Action: {
          Text: 'Get started for free',
          Target: '_blank',
          Path: '/dashboard',
          ButtonColor: 'accent',
          Raised: true,
        },
        Image: './assets/images/fathym-cloud-dashboard.png',
        // BackgroundColor: 'green',
      },
      InfoCards: [
        {
          Icon: 'backup',
          Info: `Accelerate adoption and usage of cloud-native technology with Fathym's Virtual Developers.`,
          Title: 'Accelerate Solutions',
        },
        {
          Icon: 'insert_chart',
          Info:
            'Easily access data for use in 3rd party dashboards and reports.',
          Title: 'Access Data',
        },
        {
          Icon: 'backup',
          Info: `Accelerate adoption and usage of cloud-native technology with Fathym's Virtual Developers.`,
          Title: 'Accelerate Solutions',
        },
        {
          Icon: 'insert_chart',
          Info:
            'Easily access data for use in 3rd party dashboards and reports.',
          Title: 'Access Data',
        },
      ],
      CallToAction: {
        Action: {
          Text: 'Sign up today',
          Target: '_blank',
          Path: '#',
          ButtonColor: 'accent',
          Raised: true,
        },
        Title: 'Sign up for free',
        Message:
          'Learn how fathym can save thousands of dollars in time and efficiency.',
      },
    };
  }

  //  API Methods

  //  Helpers
}
