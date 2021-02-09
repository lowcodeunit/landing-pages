import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { TemplateComponent } from './elements/template/template.component';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [TemplateComponent],
  entryComponents: [TemplateComponent]
})
export class LandingPagesModule {
  static forRoot(): ModuleWithProviders<LandingPagesModule> {
    return {
      ngModule: LandingPagesModule,
      providers: []
    };
  }
}
