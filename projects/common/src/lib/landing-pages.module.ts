import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';
import { LcuComponent } from './controls/lcu/lcu.component';
import { LcuDirective } from './directives/lcu.directive';
import { TemplateComponent } from './elements/template/template.component';

@NgModule({
  declarations: [LcuComponent, LcuDirective, TemplateComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LcuComponent, LcuDirective, TemplateComponent],
  entryComponents: [TemplateComponent]
})
export class LandingPagesModule {
  static forRoot(): ModuleWithProviders<LandingPagesModule> {
    return {
      ngModule: LandingPagesModule,
      providers: [LcuService]
    };
  }
}
