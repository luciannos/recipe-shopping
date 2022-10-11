import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private RecipeService:RecipeService,
    private router: Router, 
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.RecipeService.recipeChanged.subscribe((recipes: Recipe[])=> {
      this.recipes = recipes;
    })
    this.recipes= this.RecipeService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
}

