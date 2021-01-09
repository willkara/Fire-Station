import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { StateinfoComponent } from './components/pages/stateinfo/stateinfo.component';
import { StationinfoComponent } from './components/pages/stationinfo/stationinfo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stateinfo', component: StateinfoComponent },
  { path: 'stationinfo', component: StationinfoComponent },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
