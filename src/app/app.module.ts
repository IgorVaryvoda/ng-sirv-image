import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SirvMediaViewerModule } from 'ng-sirv-media-viewer';
import { NgOptimizedImage, ImageLoaderConfig, IMAGE_LOADER } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    SirvMediaViewerModule
  ],
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        const path = "https://demo.sirv.com";
        return createSirvUrl(path, config);
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Function that creates Sirv URL
function createSirvUrl(path: string, config: ImageLoaderConfig) {
  const url = new URL(`${path}/${config.src}`);
  if (config.width) {
    url.searchParams.set('w', config.width.toString());
  }
  return url.href;
}

