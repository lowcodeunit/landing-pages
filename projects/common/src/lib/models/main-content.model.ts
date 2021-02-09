import { InfoCardModel } from "./info-card.model";

export class MainContentModel {
    /**
     * Card info
     */
    public InfoCard: InfoCardModel;

    /**
     * Message to entice a call to action
     */
    public CallToActionMessage: string;

    /**
     * Call to action button label
     */
    public CallToActionLabel: string;

    /**
     * Call to action button URL
     */
    public CallToActionURL: string;
}