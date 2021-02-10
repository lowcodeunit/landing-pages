import { HeroContainerModel } from './hero-container.model';
import { InfoCardModel } from './info-card.model';
import { CallToActionModel } from './call-to-action.model';

export class LandingPageConfig {

   /**
    * Primary content for landing page, info and call to action
    */
    public CallToAction: CallToActionModel;

    /**
     * Hero container items
     */
    public Hero: HeroContainerModel;

    /**
     * Card info
     */
    public InfoCards: Array<InfoCardModel>;

}