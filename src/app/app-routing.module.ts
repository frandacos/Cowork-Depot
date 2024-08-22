import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { HomeComponent } from './modules/components/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: AppLayoutComponent,
      children: [
        {
          path: 'inicio',
          component: HomeComponent,
        }
      ]
    },
    // {
    //   path: 'inicio',
    //   component: HomeComponent,
    // }
    // { path: 'forbidden', loadChildren: () => import('./modules/public/forbidden/forbidden.module').then(m => m.ForbiddenModule) },
    // { path: 'systemerror', loadChildren: () => import('./modules/public/system-error/system-error.module').then(m => m.SystemErrordModule) },
    // { path: 'notfound', loadChildren: () => import('./modules/public/not-found/not-found.module').then(m => m.NotFoundModule) },
    // { path: '**', redirectTo: '/notfound' },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
