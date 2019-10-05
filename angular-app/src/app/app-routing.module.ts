import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { UserCatalogComponent } from './user-catalog/user-catalog.component';


const routes: Routes = [
  {path: 'todo-list', component: TodoComponent},
  {path: 'feedback', component: FeedbackFormComponent},
  {path: 'user-catalog', component: UserCatalogComponent},
  // {path: 'user-form', component: User}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
