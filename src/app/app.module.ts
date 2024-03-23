import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './shared/angular-materials.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { EstudiosComponent } from './Components/estudios/estudios.component';
import { ImageDialogComponent } from './Components/image-dialog/image-dialog.component';
import { GalleryDialogComponent } from './Components/gallery-dialog/gallery-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EstudiosComponent,
    ImageDialogComponent,
    GalleryDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
