import { HeroContainerModel } from './hero-container.model';
import { HeaderLinkModel } from './header-link.model';
import { MainContentModel } from './main-content.model';

export class TemplateConfigModel {
    /**
     * Header links
     */
    public HeaderLink: HeaderLinkModel;

    /**
     * Hero container items
     */
    public HeroContainer: HeroContainerModel;

    /**
     * Primary content for landing page, info and call to action
     */
    public MainContent: MainContentModel;

}