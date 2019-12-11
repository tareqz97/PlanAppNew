import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipesResolverServiceService} from "./recipes-resolver-service.service";

const routes: Routes= [
    {
      path: '',
      component: RecipesComponent,
      canActivate: [AuthGuard], children: [
    {
      path: '',
      component: RecipeStartComponent
    },
    {
      path: 'new',
      component: RecipeEditComponent
    },
    {
      path: ':id',
      component: RecipeDetailComponent,
      resolve: [RecipesResolverServiceService]
    },
    {
      path: ':id/edit',
      component: RecipeEditComponent,
      resolve: [RecipesResolverServiceService]
    },
  ]}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}
