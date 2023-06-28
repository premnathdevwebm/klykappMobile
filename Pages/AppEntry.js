import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./AppEnter/Home";
import Category from "./AppEnter/Category";
import Table from "./AppEnter/Table";
import Profile from "./AppEnter/Profile";

const styles = {
  icon: {
    width: 24,
    height: 24,
  },
};

function HomeIcon({ tintColor }) {
  return (
    <Image
      source={require("../assets/icons/Home_icon.png")}
      style={[styles.icon, tintColor]}
    />
  );
}

function CategoryIcon({ tintColor }) {
  return (
    <Image
      source={require("../assets/icons/Library_icon.png")}
      style={[styles.icon, tintColor]}
    />
  );
}

function TableIcon({ tintColor }) {
  return (
    <Image
      source={require("../assets/icons/Table_icon.png")}
      style={[styles.icon, tintColor]}
    />
  );
}

function ProfileIcon({ tintColor }) {
  return (
    <Image
      source={require("../assets/icons/Profile_icon.png")}
      style={[styles.icon, tintColor]}
    />
  );
}

const Tab = createBottomTabNavigator();

const AppEntery = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "black" },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <HomeIcon tintColor={focused ? "white" : "gray"} />;
          } else if (route.name === "Category") {
            return <CategoryIcon tintColor={focused ? "white" : "gray"} />;
          } else if (route.name === "Table") {
            return <TableIcon tintColor={focused ? "white" : "gray"} />;
          } else if (route.name === "Profile") {
            return <ProfileIcon tintColor={focused ? "white" : "gray"} />;
          }
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Table" component={Table} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppEntery;
