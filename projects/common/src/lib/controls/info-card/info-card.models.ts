import { LCUElementContext } from '@lcu/common';

export class LandingPagesInfoCardElementState {}

export class LandingPagesInfoCardContext extends LCUElementContext<LandingPagesInfoCardElementState> {
  /**
   * Card icon
   */
  public Icon?: string;

  /**
   * Message / string of content
   */
  public Info?: string;

  /**
   * When using an SVG for mat-icon
   */
  public SVGIcon?: string;

  /**
   * Card title
   */
  public Title: string;
}
