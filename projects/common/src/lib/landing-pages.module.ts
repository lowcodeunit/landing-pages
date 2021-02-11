import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LandingPagesTemplateElementComponent } from './elements/template/template.component';

@NgModule({
  declarations: [LandingPagesTemplateElementComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LandingPagesTemplateElementComponent],
  entryComponents: [LandingPagesTemplateElementComponent]
})
export class LandingPagesModule {
  static forRoot(): ModuleWithProviders<LandingPagesModule> {
    return {
      ngModule: LandingPagesModule,
      providers: []
    };
  }
}
