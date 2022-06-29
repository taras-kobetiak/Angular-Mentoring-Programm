import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursePageComponent } from './add-course-page/add-course-page/add-course-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesBlockComponent } from './pages-block/pages-block.component';


const CourseItemRoutes: Routes = [
  { path: 'new', component: AddCoursePageComponent },
]


const routes: Routes = [
  { path: '', redirectTo: '/course', pathMatch: 'full' },
  { path: 'course', component: PagesBlockComponent, children: CourseItemRoutes },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
