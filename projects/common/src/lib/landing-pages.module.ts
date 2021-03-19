import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconRegistry } from '@angular/material/icon';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { AppHostModule } from '@lowcodeunit/app-host-common';
import { LandingPagesBlocksElementComponent } from './elements/blocks/blocks.component';
import { LandingPagesHomePageElementComponent } from './elements/home-page/home-page.component';
import { LandingPagesHeroElementComponent } from './controls/hero/hero.component';
import { LandingPagesInfoCardElementComponent } from './controls/info-card/info-card.component';
import { LandingPagesInfoCardsElementComponent } from './controls/info-cards/info-cards.component';
import { LandingPagesCallToActionElementComponent } from './controls/call-to-action/call-to-action.component';
import { LazyElementModule } from '@lowcodeunit/lazy-element';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LandingPagesBlocksElementComponent,
    LandingPagesHomePageElementComponent,
    LandingPagesHeroElementComponent,
    LandingPagesInfoCardElementComponent,
    LandingPagesInfoCardsElementComponent,
    LandingPagesCallToActionElementComponent,
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    AppHostModule,
    LazyElementModule,
    YouTubePlayerModule,
    MatIconModule,
  ],
  exports: [
    LandingPagesBlocksElementComponent,
    LandingPagesHomePageElementComponent,
    LandingPagesHeroElementComponent,
    LandingPagesInfoCardElementComponent,
    LandingPagesInfoCardsElementComponent,
    LandingPagesCallToActionElementComponent,
  ],
  entryComponents: [
    LandingPagesBlocksElementComponent,
    LandingPagesHomePageElementComponent,
    LandingPagesHeroElementComponent,
    LandingPagesInfoCardElementComponent,
    LandingPagesInfoCardsElementComponent,
    LandingPagesCallToActionElementComponent,
  ],
})
export class LandingPagesModule {
  static forRoot(): ModuleWithProviders<LandingPagesModule> {
    return {
      ngModule: LandingPagesModule,
      providers: [MatIconRegistry],
    };
  }
}
