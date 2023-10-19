import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonLargeComponent } from './components/button-large/button-large.component';
import { ButtonFillComponent } from './components/button-fill/button-fill.component';
import { ButtonMediumComponent } from './components/button-medium/button-medium.component';
import { ButtonMediumFillComponent } from './components/button-medium-fill/button-medium-fill.component';
import { NftCardComponent } from './components/nft-card/nft-card.component';
import { NftValueCardComponent } from './components/nft-value-card/nft-value-card.component';
import { DegreePrefixPipe } from './pipes/degree-prefix.pipe';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { ShortDetailsCardComponent } from './components/short-details-card/short-details-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ButtonLargeComponent,
    ButtonFillComponent,
    ButtonMediumComponent,
    ButtonMediumFillComponent,
    NftCardComponent,
    NftValueCardComponent,
    DegreePrefixPipe,
    ProductCardComponent,
    BlogCardComponent,
    ShortDetailsCardComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
