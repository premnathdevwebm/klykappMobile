import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfilePage = () => {
  const navigation = useNavigation();

  const onLogout = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={onLogout}>
      <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;
