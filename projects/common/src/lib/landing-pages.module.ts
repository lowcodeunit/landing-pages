import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { AppHostModule } from '@lowcodeunit/app-host-common';
import { LandingPagesBlocksElementComponent } from './elements/blocks/blocks.component';
import { LandingPagesHomePageElementComponent } from './elements/home-page/home-page.component';

@NgModule({
  declarations: [
    LandingPagesBlocksElementComponent,
    LandingPagesHomePageElementComponent,
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
  ],
  entryComponents: [
    LandingPagesBlocksElementComponent,
    LandingPagesHomePageElementComponent,
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
