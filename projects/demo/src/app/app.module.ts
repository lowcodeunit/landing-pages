import { LandingPagesModule } from '@lowcodeunit/landing-pages-common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomeComponent } from './controls/home/home.component';
import { LcuDocumentationModule } from '@lowcodeunit/lcu-documentation-common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule,
    LcuDocumentationModule.forRoot(),
    LandingPagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LandingPagesModule]
})
export class AppModule { }
