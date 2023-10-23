import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './features/pages/home-page/page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HeroComponent } from './features/pages/home-page/hero/hero.component';
import { HomeAuctionsComponent } from './features/pages/home-page/home-auctions/home-auctions.component';
import { TopCollectionHomeComponent } from './features/pages/home-page/top-collection-home/top-collection-home.component';
import { BusinessHomeComponent } from './features/pages/home-page/business-home/business-home.component';
import { ExploreHomeComponent } from './features/pages/home-page/explore-home/explore-home.component';
import { ReviewHomeComponent } from './features/pages/home-page/review-home/review-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroComponent,
    HomeAuctionsComponent,
    TopCollectionHomeComponent,
    BusinessHomeComponent,
    ExploreHomeComponent,
    ReviewHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [

  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
