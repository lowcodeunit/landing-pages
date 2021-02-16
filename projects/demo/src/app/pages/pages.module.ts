import { MaterialModule, PipeModule } from '@lcu/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LandingPagesModule } from '@lowcodeunit/landing-pages-common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { BlocksComponent } from './blocks/blocks.component';

@NgModule({
  declarations: [HomeComponent, BlocksComponent],
  imports: [
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    LandingPagesModule,
    PipeModule,
  ],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class PagesModule {}
