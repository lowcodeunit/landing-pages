import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { AppHostModule } from '@lowcodeunit/app-host-common';
import { LandingPagesBlocksElementComponent } from './elements/blocks/blocks.component';
import { LandingPagesHomePageElementComponent } from './elements/home-page/home-page.component';
import { LandingPagesHeroElementComponent } from './controls/hero/hero.component';
import { LandingPagesInfoCardElementComponent } from './controls/info-card/info-card.component';
import { LandingPagesCallToActionElementComponent } from './controls/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    LandingPagesBlocksElementComponent,
    LandingPagesHomePageElementComponent,
    LandingPagesHeroElementComponent,
    LandingPagesInfoCardElementComponent,
    LandingPagesCallToActionElementComponent,
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    AppHostModule,
  ],
  exports: [
    LandingPagesBlocksElementComponent,
    LandingPagesHomePageElementComponent,
    LandingPagesHeroElementComponent,
    LandingPagesInfoCardElementComponent,
    LandingPagesCallToActionElementComponent,
  ],
  entryComponents: [
    LandingPagesBlocksElementComponent,
    LandingPagesHomePageElementComponent,
    LandingPagesHeroElementComponent,
    LandingPagesInfoCardElementComponent,
    LandingPagesCallToActionElementComponent,
  ],
})
export class LandingPagesModule {
  static forRoot(): ModuleWithProviders<LandingPagesModule> {
    return {
      ngModule: LandingPagesModule,
      providers: [],
    };
  }
}
