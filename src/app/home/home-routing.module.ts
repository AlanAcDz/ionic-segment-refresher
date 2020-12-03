import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'page1',
        loadChildren: () => import('../pages/page1/page1.module').then( m => m.Page1PageModule)
      },
      {
        path: 'page2',
        loadChildren: () => import('../pages/page2/page2.module').then( m => m.Page2PageModule)
      },
      { path: '**', redirectTo: 'page1', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
