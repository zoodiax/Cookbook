import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Pizza", "Tasty Italian Dish" , "https://bigseventravel.com/wp-content/uploads/2019/09/Screenshot-2019-09-06-at-17.45.17.png"),
    new Recipe("Pasta", "Another Tasty Italian Dish" , "https://c.pxhere.com/photos/4c/f8/basil_food_italian_pasta_plate_spaghetti-942827.jpg!d")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
