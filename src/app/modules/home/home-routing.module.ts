import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrowseRangeComponent } from './components/browse-range/browse-range.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { FuniroFurnitureComponent } from './components/funiro-furniture/funiro-furniture.component';
import { PageNotFoundComponent } from 'src/app/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'banner',component:BannerComponent},
    {path:'browse-range',component:BrowseRangeComponent},
    {path:'our-products',component:OurProductsComponent},
    {path:'funiro-furniture',component:FuniroFurnitureComponent},
    {path:'**',component:PageNotFoundComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
