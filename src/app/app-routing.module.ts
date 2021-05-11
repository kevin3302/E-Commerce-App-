import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import  {ProductsComponent } from './products/products.component' 
import { RegisterComponent } from './register/register.component';
const routes: Routes = [

  {path:"Home", component:ProductsComponent},
  {path:"Register", component:RegisterComponent},
  {path:"Login", component:LoginComponent},
  {path:"products", component:ProductsComponent},
  {path:"footer", component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
