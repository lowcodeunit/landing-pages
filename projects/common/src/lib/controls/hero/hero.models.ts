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
   * Height of the hero image, will default to set style if not provided
   */
  public HeroImageHeight?: string;

  /**
   * Setting an external style for the hero image
   */
  public HeroImageStyle?: string;

  /**
   * Width of the hero image, will default to set style if not provided
   */
  public HeroImageWidth?: string;

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
