import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursePageComponent } from './modules/add-course-page/add-course-page/add-course-page.component';

import { AuthGuard } from './guards/isAuth.guard';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';
import { PagesBlockComponent } from './modules/main-content/components/pages-block/pages-block.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'courses', component: PagesBlockComponent, canActivate: [AuthGuard] },
  { path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./modules/login-page/login-page.module').then(m => m.LoginModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
