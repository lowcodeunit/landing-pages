import { InfoCardModel } from "./info-card.model";

export class CallToActionModel {
    /**
     * Message to entice a call to action
     */
    public Message: string;

    /**
     * Call to action button label
     */
    public Label: string;

    /**
     * Where to open linked document
     */
    public Target: string;
    /**
     * Call to action button URL
     */
    public URL: string;
}