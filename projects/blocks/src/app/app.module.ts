import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPagesModule } from '@lowcodeunit/landing-pages-common';
import { AppRoutingModule } from '../../../demo/src/app/app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FathymSharedModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    LandingPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
