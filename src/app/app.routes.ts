import { provideRouter, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
