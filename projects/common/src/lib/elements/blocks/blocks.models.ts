import { LCUElementContext } from '@lcu/common';
import { LCUActionState } from '@lowcodeunit/app-host-common';
import { CallToActionModel } from '../../models/call-to-action.model';
import { HeroModel } from '../../models/hero.model';
import { InfoCardModel } from '../../models/info-card.model';

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
  public CallToAction?: CallToActionModel;

  /**
   * Hero model
   */
  public Hero?: HeroModel;

  /**
   * Card info
   */
  public InfoCards?: InfoCardModel[];
}
