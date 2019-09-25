import { UsersComponent } from "./component/users/users.component";
import { OthersComponent } from "./component/others/others.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    data: {
      label: "Dashboard"
    }
  },
  {
    path: "others",
    component: OthersComponent,
    data: {
      label: "Others"
    }
  },
  {
    path: "users",
    component: UsersComponent,
    data: {
      label: "Users"
    }
  }
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
