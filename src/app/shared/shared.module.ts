import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortDetailsCardComponent } from './components/short-details-card/short-details-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { NftCardComponent } from './components/nft-card/nft-card.component';
import { NftValueCardComponent } from './components/nft-value-card/nft-value-card.component';
import { ButtonMediumComponent } from './components/button-medium/button-medium.component';
import { ButtonMediumFillComponent } from './components/button-medium-fill/button-medium-fill.component';
import { ButtonFillComponent } from './components/button-fill/button-fill.component';
import { ButtonLargeComponent } from './components/button-large/button-large.component';
import { DegreePrefixPipe } from './pipes/degree-prefix.pipe';
import { UserCollectionCardComponent } from './components/user-collection-card/user-collection-card.component';

@NgModule({
  declarations: [
    ShortDetailsCardComponent,
    ProductCardComponent,
    BlogCardComponent,
    NftCardComponent,
    NftValueCardComponent,
    ButtonMediumComponent,
    ButtonMediumFillComponent,
    ButtonFillComponent,
    ButtonLargeComponent,
    DegreePrefixPipe,
    UserCollectionCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ShortDetailsCardComponent,
    ProductCardComponent,
    BlogCardComponent,
    NftCardComponent,
    NftValueCardComponent,
    ButtonMediumComponent,
    ButtonMediumFillComponent,
    ButtonFillComponent,
    ButtonLargeComponent,
    DegreePrefixPipe,
    UserCollectionCardComponent
  ]
})
export class SharedModule { }
