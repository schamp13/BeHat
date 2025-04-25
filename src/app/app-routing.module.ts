import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { SignScreenComponent } from './screens/sign-screen/sign-screen.component';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'login', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'sign', component: SignScreenComponent, pathMatch: 'full' },
  { path: 'productos', component: ProductosScreenComponent, pathMatch: 'full' },
  { path: 'productos/:seccion', component: ProductosScreenComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
