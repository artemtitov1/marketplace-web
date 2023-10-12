import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonLargeComponent } from './components/button-large/button-large.component';
import { ButtonFillComponent } from './components/button-fill/button-fill.component';
import { ButtonMediumComponent } from './components/button-medium/button-medium.component';
import { ButtonMediumFillComponent } from './components/button-medium-fill/button-medium-fill.component';
import { NftCardComponent } from './components/nft-card/nft-card.component';
import { TimePassedPipe } from './pipes/time-passed.pipe';
import { NftValueCardComponent } from './components/nft-value-card/nft-value-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonLargeComponent,
    ButtonFillComponent,
    ButtonMediumComponent,
    ButtonMediumFillComponent,
    NftCardComponent,
    TimePassedPipe,
    NftValueCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
