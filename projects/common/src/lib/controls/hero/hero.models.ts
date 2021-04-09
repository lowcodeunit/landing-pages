import { LCUElementContext } from '@lcu/common';
import { LCUActionState } from '@lowcodeunit/app-host-common';

export class LandingPagesHeroElementState {}

export class LandingPagesHeroContext extends LCUElementContext<LandingPagesHeroElementState> {
  /**
   * Hero Action
   */
  public Action?: LCUActionState;

  /**
   * Background image
   */
  public BackgroundImage?: string;

  /**
   * Background color
   */
  public BackgroundColor?: string;

  /**
   * Pass a object to set styles for the hero image
   */
  public HeroImageStyle?: object;

  /**
   * Image for Hero
   */
  public Image?: string;

  /**
   * Card reason: e.g. 'Help breweries be super cool, because...!'
   */
  public Message: string;

  /**
   * Context associated with title: e.g. 'for Breweries'
   */
  public SubTitle: string;

  /**
   * Card title: e.g. 'IoT Ensemble'
   */
  public Title: string;
}
