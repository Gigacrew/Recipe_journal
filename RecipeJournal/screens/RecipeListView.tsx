import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Recipe, RecipeListScreenProps } from "../utils/types/NavigationTypes";
import { TouchableOpacity, StatusBar } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../utils/types/NavigationTypes";

type RecipeListScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "RecipeList"
>;

const RecipeList: React.FC<RecipeListScreenProps> = ({ navigation }) => {
  const recipes: Recipe[] = [
    {
      title: "Creamy Tomato Pasta",
      servings: "3",
      type: "Dinner",
      description:
        "This Creamy Tomato Pasta is a simple and delicious meal made from scratch with a cream and tomato-based sauce that is rich and silky smooth. This quick and easy recipe is ready in under 30 minutes using simple ingredients that are easy to find.",
      ingredients: [
        "Pasta",
        "Butter",
        "Garlic",
        "Tomato Sauce",
        "Salt",
        "Pepper",
        "Basil",
      ],
      imgURL:
        "https://cdn.pixabay.com/photo/2017/11/11/10/14/pasta-2938726_1280.jpg",
      instructions: [
        "Cook the pasta according to the package instructions until al dente. Drain and set aside.",
        "In a large skillet, melt the butter over medium heat. Add the garlic and sauté until fragrant.",
        "Pour in the tomato sauce and season with salt and pepper. Stir well to combine.",
        "Reduce the heat to low and add the cooked pasta to the skillet. Toss gently to coat the pasta with the sauce.",
        "Cook for a few minutes until the pasta is heated through. Sprinkle with fresh basil leaves.",
        "Serve hot and enjoy!",
      ],
    },
    {
      title: "Apple Pie",
      servings: "10",
      type: "Dessert",
      description:
        "This classic Apple Pie is a comforting dessert that features a flaky crust and a sweet apple filling. It's perfect for any occasion and can be enjoyed on its own or with a scoop of vanilla ice cream.",
      ingredients: [
        "Pie Crust",
        "Apples",
        "Sugar",
        "Cinnamon",
        "Lemon Juice",
        "Flour",
        "Butter",
      ],
      imgURL:
        "https://www.thereciperebel.com/wp-content/uploads/2021/10/apple-pie-www.thereciperebel.com-1200-17-of-53.jpg",
      instructions: [
        "Preheat the oven to 425°F (220°C).",
        "Prepare the pie crust and line a 9-inch pie dish.",
        "In a large bowl, combine sliced apples, sugar, cinnamon, lemon juice, and flour. Toss until the apples are well coated.",
        "Transfer the apple mixture to the prepared pie crust. Dot the top with small pieces of butter.",
        "Cover the pie with the second pie crust and seal the edges. Cut slits on the top crust to allow steam to escape.",
        "Bake in the preheated oven for 45 to 50 minutes, or until the crust is golden brown and the filling is bubbly.",
        "Remove from the oven and let it cool for at least 1 hour before serving.",
        "Serve warm or at room temperature with a scoop of vanilla ice cream, if desired.",
      ],
    },
    {
      title: "Spaghetti",
      servings: "2",
      type: "Dinner",
      description:
        "Spaghetti is a classic Italian pasta dish that is loved by people of all ages. This recipe features al dente spaghetti noodles tossed in a flavorful tomato sauce and topped with grated Parmesan cheese.",
      ingredients: [
        "Spaghetti Noodles",
        "Tomato Sauce",
        "Garlic",
        "Olive Oil",
        "Salt",
        "Pepper",
        "Fresh Basil",
        "Grated Parmesan Cheese",
      ],
      imgURL:
        "https://static01.nyt.com/images/2022/12/23/multimedia/afg-spaghetti-alla-assassina-1-19ef/afg-spaghetti-alla-assassina-1-19ef-mediumSquareAt3X.jpg",
      instructions: [
        "Bring a large pot of salted water to a boil. Cook the spaghetti according to the package instructions until al dente. Drain and set aside.",
        "In a large skillet, heat olive oil over medium heat. Add minced garlic and sauté until fragrant.",
        "Pour in the tomato sauce and season with salt and pepper. Simmer for a few minutes to let the flavors meld together.",
        "Add the cooked spaghetti to the skillet and toss gently to coat the noodles with the sauce.",
        "Cook for an additional minute or until the pasta is heated through.",
        "Serve hot, garnished with fresh basil leaves and grated Parmesan cheese.",
      ],
    },
    {
      title: "French Toast",
      servings: "5",
      type: "Breakfast",
      description:
        "French Toast is a classic breakfast dish made by soaking slices of bread in a mixture of eggs, milk, and vanilla, then frying them until golden brown. This recipe results in perfectly crispy and flavorful French Toast that is sure to be a hit!",
      ingredients: [
        "Bread Slices",
        "Eggs",
        "Milk",
        "Vanilla Extract",
        "Cinnamon",
        "Butter",
        "Maple Syrup",
      ],
      imgURL:
        "https://www.seriouseats.com/thmb/_nSWyhg_GmvdjUwMMvX7KG6lYNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-quick-easy-french-toast-hero-03-2a9485bbb12b4cf5abcfef53aa9accd9.jpg",
      instructions: [
        "In a shallow dish, whisk together eggs, milk, vanilla extract, and cinnamon until well combined.",
        "Heat a non-stick skillet or griddle over medium heat and melt butter on the surface.",
        "Dip each bread slice into the egg mixture, allowing it to soak for a few seconds on each side.",
        "Place the soaked bread slices onto the heated skillet or griddle and cook until golden brown on both sides, flipping once.",
        "Remove from the skillet and transfer to serving plates.",
        "Serve hot with a drizzle of maple syrup and additional toppings, if desired.",
      ],
    },
    {
      title: "Pesto Lasagna Rolls",
      servings: "4",
      type: "Dinner",
      description:
        "Pesto Lasagna Rolls are a delicious twist on traditional lasagna. This recipe features lasagna noodles rolled up with a flavorful pesto filling, topped with marinara sauce and melted cheese. It's a crowd-pleasing dish that is perfect for a cozy dinner.",
      ingredients: [
        "Lasagna Noodles",
        "Pesto Sauce",
        "Ricotta Cheese",
        "Parmesan Cheese",
        "Egg",
        "Spinach",
        "Marinara Sauce",
        "Mozzarella Cheese",
      ],
      imgURL:
        "https://www.thespruceeats.com/thmb/cs4RURcDGDODlR9Rg_g98q1x8mw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1-lasagna-rolls-giant-56a9bf315f9b58b7d0fe9eaf.jpg",
      instructions: [
        "Preheat the oven to 375°F (190°C).",
        "Cook the lasagna noodles according to the package instructions until al dente. Drain and set aside.",
        "In a bowl, combine the pesto sauce, ricotta cheese, grated Parmesan cheese, beaten egg, and chopped spinach. Mix well.",
        "Spread a thin layer of marinara sauce on the bottom of a baking dish.",
        "Place a cooked lasagna noodle on a clean surface and spread a generous amount of the pesto mixture onto the noodle.",
        "Roll up the noodle tightly and place it seam-side down in the prepared baking dish. Repeat with the remaining noodles.",
        "Pour the marinara sauce over the lasagna rolls, covering them completely. Sprinkle shredded mozzarella cheese on top.",
        "Bake in the preheated oven for 20-25 minutes or until the cheese is melted and bubbly.",
        "Remove from the oven and let it cool for a few minutes before serving.",
        "Serve hot and enjoy!",
      ],
    },
  ];

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate("Recipe", { recipe: recipe });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RECIPE LIST</Text>
      <View style={styles.listContainer}>
        {recipes.map((recipe, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listItem}
            onPress={() => handleRecipePress(recipe)}
          >
            <Image source={{ uri: recipe.imgURL }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeType}>{recipe.type}</Text>
            </View>
            <Text style={styles.servings}>{recipe.servings} servings</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => navigation.navigate("AddNewRecipe")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            margin: 8,
            backgroundColor: "#873e23",
            alignSelf: "flex-end",
          }}
        >
          <Text style={{ color: "white", fontSize: 32, textAlign: "center" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    width: "100%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  recipeType: {
    fontSize: 12,
    color: "gray",
  },
  servings: {
    textAlign: "right",
  },
});

export default RecipeList;
