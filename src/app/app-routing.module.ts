import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', component: ErrorPageComponent }, // Handle 404 errors
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
