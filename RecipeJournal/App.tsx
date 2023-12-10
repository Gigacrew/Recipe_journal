/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from "react";
import NavigationBar from "./utils/components/NavigationBar";
import {RootStackParamList} from "./utils/types/NavigationTypes";
import RecipeList from "./screens/RecipeListView";
import RecipeDetail from "./screens/RecipeDetail";
import HomeScreen from "./screens/HomeScreen";
import AddNewRecipe from "./screens/AddNewRecipe";
import MealPlanDetailsScreen from "./screens/MealPlanDetails";
import ShoppingList from "./screens/ShoppingList";
import SignUpScreen from "./screens/SignUpScreen";

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import auth from "@react-native-firebase/auth";
import firebase from "@react-native-firebase/app";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {NavigationContainer} from "@react-navigation/native";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";

const firebaseConfig = {
  apiKey: "AIzaSyA14ftIXG77z-D-qeM-bPHTj97jXpXmNY8",

  authDomain: "recipejournal-d7bc0.firebaseapp.com",

  projectId: "recipejournal-d7bc0",

  storageBucket: "recipejournal-d7bc0.appspot.com",

  messagingSenderId: "484617368483",

  appId: "1:484617368483:web:a9d09ddcbea91289f22016",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState("");

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function onAuthStateChanged(authUser) {
    setUser(authUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });
  const Stack = createBottomTabNavigator<RootStackParamList>();
  const CustomTabBar: React.FC<BottomTabBarProps> = props => {
    return <NavigationBar {...props} />;
  };
  // if (initializing) return <View />;
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log("User signed out!");
        setUser(null);
      });
  };

  return (
    <NavigationContainer>
      {user ? (
        <>
          <Stack.Navigator
            initialRouteName="Home"
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={({route}) => ({
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              initialParams={{title: "Welcome to Your Recipe Journal"}}
            />
            <Stack.Screen
              name="MealPlanDetails"
              component={MealPlanDetailsScreen}
            />
            <Stack.Screen
              name="RecipeList"
              component={RecipeList}
              options={({navigation}) => ({navigation})}
            />
            <Stack.Screen name="Recipe" component={RecipeDetail} />
            <Stack.Screen name="AddNewRecipe" component={AddNewRecipe} />
            <Stack.Screen name="ShoppingList" component={ShoppingList} />
          </Stack.Navigator>
          <TouchableOpacity onPress={logout} style={styles.logoutButton}>
            <Text style={styles.logoutLabel}>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      )}
      <SafeAreaView>
        <StatusBar
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  logoutButton: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  logoutLabel: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default App;
