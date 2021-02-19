import { LCUElementContext } from '@lcu/common';
import { LCUActionState } from '@lowcodeunit/app-host-common';
import { LandingPagesCallToActionContext } from '../../controls/call-to-action/call-to-action.models';
import { LandingPagesHeroContext } from '../../controls/hero/hero.models';
import { LandingPagesInfoCardContext } from '../../controls/info-card/info-card.models';

/**
 * Variable state properties used within the blocks landing page.
 */
export class LandingPagesBlocksElementState {}

/**
 * Main context used for details of the blocks landing page.
 */
export class LandingPagesBlocksContext extends LCUElementContext<LandingPagesBlocksElementState> {
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
