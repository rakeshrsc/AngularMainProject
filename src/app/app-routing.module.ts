import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpicsComponent } from './epics/epics.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'epics', component: EpicsComponent },
  { path: '',   redirectTo: '/projects', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
