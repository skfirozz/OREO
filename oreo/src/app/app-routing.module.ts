import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ItemsComponent } from './component/items/items.component';
import { DisplayStoreComponent } from './component/display-store/display-store.component';
import { TestingComponent } from './component/testing/testing.component';


const routes: Routes = [
  { path: 'test', component: ItemsComponent },
  {
    path: 't', component: TestingComponent,
    children: [
      { path: '', component: DisplayStoreComponent }
    ]

  },
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: DisplayStoreComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
