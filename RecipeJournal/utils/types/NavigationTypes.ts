import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home?: HomeScreenCustomProps;
  Details?: DetailsScreenCustomProps;
  RecipeList?: RecipeListCustomProps;
  Recipe?: RecipeDetailCustomProps;
  AddNewRecipe?: AddRecipeCustomProps;
  MealPlanDetails?: MealPlanDetailsScreenCustomProps;
  ShoppingList?: ShoppingListCustomProps;
};

export type Recipe = {
  title: string;
  servings: string;
  description: string;
  instructions: string[];
  ingredients: string[];
  type: string;
  imgURL: string;
};

type HomeScreenCustomProps = {
  navButtonText?: string;
  title?: string;
  text?: string;
};
type DetailsScreenCustomProps = {
  navButtonText?: string;
  text?: string;
  title?: string;
};
type MealPlanDetailsScreenCustomProps = {
  navButtonText?: string;
  text?: string;
  title?: string;
};
type RecipeListCustomProps = {
  title?: string;
  navButtonText?: string;
};
type RecipeDetailCustomProps = {
  title?: string;
  navButtonText?: string;
  recipe?: Recipe;
};
type AddRecipeCustomProps = {
  title?: string;
  navButtonText?: string;
  recipe?: Recipe;
};
type ShoppingListCustomProps = {
  title?: string;
  navButtonText?: string;
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;
type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Details"
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
type RecipeListScreenRouteProp = RouteProp<RootStackParamList, "RecipeList">;
type RecipeListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "RecipeList"
>;
type ShoppingListScreenRouteProp = RouteProp<
  RootStackParamList,
  "ShoppingList"
>;
type ShoppingListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ShoppingList"
>;
type RecipeScreenRouteProp = RouteProp<RootStackParamList, "Recipe">;
type RecipeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Recipe"
>;

type AddRecipeRouteProp = RouteProp<RootStackParamList, "AddNewRecipe">;
type AddRecipeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AddNewRecipe"
>;

type MealPlanDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "MealPlanDetails"
>;
type MealPlanDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealPlanDetails"
>;

export type DetailsScreenProps = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
};
export type MealPlanDetailsScreenProps = {
  navigation: MealPlanDetailsScreenNavigationProp;
  route: MealPlanDetailsScreenRouteProp;
};
export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};
export type RecipeListScreenProps = {
  navigation: RecipeListScreenNavigationProp;
  route: RecipeListScreenRouteProp;
};
export type ShoppingListScreenProps = {
  navigation: ShoppingListScreenNavigationProp;
  route: ShoppingListScreenRouteProp;
};
export type RecipeScreenProps = {
  navigation: RecipeScreenNavigationProp;
  route: RecipeScreenRouteProp;
};
export type AddRecipeScreenProps = {
  navigation: RecipeScreenNavigationProp;
  route: RecipeScreenRouteProp;
};
export type NavigationBarProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};
