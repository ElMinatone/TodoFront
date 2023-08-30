import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LembretesComponent } from './lembretes/lembretes.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: LembretesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
