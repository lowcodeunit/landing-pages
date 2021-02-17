import { LCUElementContext } from '@lcu/common';
import { LCUActionState } from '@lowcodeunit/app-host-common';

export class LandingPagesHeroElementState {}

export class LandingPagesHeroContext extends LCUElementContext<LandingPagesHeroElementState> {
  /**
   * Where to open linked document
   */
  public Action?: LCUActionState;

  /**
   * Background image that sits below hero container content
   */
  public BackgroundImage?: string;

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
