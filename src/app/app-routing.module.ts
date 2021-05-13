import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import  {ProductsComponent } from './products/products.component' 
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { WatchesComponent } from './watches/watches.component';
const routes: Routes = [

  {path:"Home", component:HomeComponent},
  {path:"Register", component:RegisterComponent},
  {path:"Login", component:LoginComponent},
  {path:"products", component:ProductsComponent, children:[
  {path:"mobiles", component:MobilesComponent},
  {path:"watches", component:WatchesComponent},
  {path:"televisions", component:TelevisionsComponent},
  {path:'', redirectTo:'/products/mobiles', pathMatch:'full'}]},
  {path:"footer", component:FooterComponent},
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
