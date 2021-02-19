import { LCUActionState } from '@lowcodeunit/app-host-common';
import { LCUElementContext } from '@lcu/common';

export class LandingPagesCallToActionElementState {}

export class LandingPagesCallToActionContext extends LCUElementContext<LandingPagesCallToActionElementState> {
  /**
   * Where to open linked document
   */
  public Action?: LCUActionState;

  /**
   * Image for call to action
   */
  public Image?: string;

  /**
   * Message to entice a call to action
   */
  public Message?: string;

  /**
   * Message to entice a call to action
   */
  public Title?: string;
}
