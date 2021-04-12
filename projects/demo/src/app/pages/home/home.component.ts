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
        Title: 'Supercharge Cloud',
        SubTitle: 'with Virtual Developers',
        Message: `Don't wait for the right hire, use the team you have.  Take control of Cloud.`,
        Action: {
          Text: 'Get started for free',
          Target: '_blank',
          Path: '/dashboard',
          Color: 'accent',
          Raised: true,
        },
        Image: './assets/images/pngs/isometric-road.png',
        HeroImageStyle: {
          height: 'auto',
          'max-width': '621px',
          width: '100%',
          position: 'absolute',
          top: '50px',
          right: '5%'
        },
        BackgroundImage: 'url(./assets/images/background-wave-fathym.svg)',
      },
      HeroCallToAction: {
        Message:
          'Modular and reusable components and tools that help your team deliver repeatable, low-code solutions.',
        // Image: './assets/images/fathym-cloud-dashboard.png',
        // Elements: [
        //   {
        //     Name: 'lcu-billing-plan-view-element',
        //     StateKey: 'Billing',
        //     ActionKeys: { 'buy-now-click': 'Pricing.BuyNowClick' },
        //   },
        // ],
        IsRestricted: true,
        YoutubeVideoID: 'hQaVqLzAmIM',
      },
      // HeroCallToAction: {
      //   Message:
      //     'Modular and reusable components and tools that help your team deliver repeatable, low-code solutions.',
      //   Image: './assets/images/fathym-cloud-dashboard.png',
      //   IsRestricted: true
      // },
      InfoCards: [
        {
          Icon: 'auto_awesome',
          Info:
            'Teams get value from their Cloud on day one, skipping the multi-month learning curves and tedius hiring processes.',
          Title: 'Accelerate',
        },
        {
          Icon: 'apps',
          Info:
            'Deliver your solutions faster and more reliably on cloud infrastructure, with out the massive learning curve.',
          Title: 'Deliver',
        },
        {
          Icon: 'cloud',
          Info:
            'Bring control to adoption and usage of cloud-native technology with best practices anyone on the team can leverage, today.',
          Title: 'Control',
        },
      ],
      CallToAction: {
        Action: {
          Text: 'Sign up today',
          Target: '_blank',
          Path: '#',
          Color: 'accent',
          Raised: true,
        },
        Title: 'Sign up for free',
        Message:
          'Learn how fathym can save thousands of dollars in time and efficiency.',
        BackgroundImage: 'url(./assets/images/background-wave-cta-fathym.svg)',
      },
      ElementConfigs: {
        'lcu-billing-plan-view-element': {
          Scripts: [
            'https://www.iot-ensemble.com/_lcu/lcu-billing-lcu/wc/lcu-billing.lcu.js',
          ],
          Styles: [
            // "https://www.iot-ensemble.com/_lcu/lcu-billing-lcu/wc/lcu-billing.lcu.css",
          ],
          ElementName: 'lcu-billing-plan-view-element',
        },
      },
    };

    this.HomePageLandingPageContext.CallToAction.ElementConfigs = this.HomePageLandingPageContext.HeroCallToAction.ElementConfigs = this.HomePageLandingPageContext.ElementConfigs;
  }

  //  API Methods

  //  Helpers
}
