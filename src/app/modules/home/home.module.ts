import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrowseRangeComponent } from './components/browse-range/browse-range.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { FuniroFurnitureComponent } from './components/funiro-furniture/funiro-furniture.component';
import { HeaderHomeComponent } from './shared/header-home/header-home.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    BrowseRangeComponent,
    OurProductsComponent,
    FuniroFurnitureComponent,
    HeaderHomeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
