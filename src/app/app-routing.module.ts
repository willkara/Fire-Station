import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { StateinfoComponent } from './components/pages/stateinfo/stateinfo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stateinfo', component: StateinfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
