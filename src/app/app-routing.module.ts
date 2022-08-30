import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import { ApplicationPageComponent } from './views/application-page/application-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'application',
    children: [
      {
        path: '',
        component: ApplicationPageComponent
      },
      {
        path: 'chart',
        component: ChartComponent
      },
      {
        path: 'table',
        component: TableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
