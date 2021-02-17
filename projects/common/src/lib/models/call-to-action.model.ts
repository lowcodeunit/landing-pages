import { InfoCardModel } from './info-card.model';
import { LCUActionState } from '@lowcodeunit/app-host-common';

export class CallToActionModel {
  /**
   * Where to open linked document
   */
  public Action?: LCUActionState;

  /**
   * Message to entice a call to action
   */
  public Message?: string;
}
