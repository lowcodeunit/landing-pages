import { LCUActionState } from '@lowcodeunit/app-host-common';
import { LCUElementContext } from '@lcu/common';
import { LazyElementConfig, LazyElementToken } from '@lowcodeunit/lazy-element';

export class LandingPagesCallToActionElementState {}

export class LandingPagesCallToActionContext extends LCUElementContext<LandingPagesCallToActionElementState> {
  /**
   * Where to open linked document
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

  public ElementConfigs?: { [key: string]: LazyElementConfig };

  /**
   * Custom elements for rendering
   */
  public Elements?: LazyElementToken[];

  /**
   * Image for call to action
   */
  public Image?: string;

  /**
   * Whether the width is restricted
   */
  public IsRestricted?: boolean;

  /**
   * Message to entice a call to action
   */
  public Message?: string;

  /**
   * Message to entice a call to action
   */
  public Title?: string;
}
