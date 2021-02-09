/**
 * Section below header, that contains
 * the purpose for the landing page
 */
export class HeroContainerModel {
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
