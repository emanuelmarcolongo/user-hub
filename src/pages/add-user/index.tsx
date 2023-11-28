import React from "react";
import { View, StyleSheet, Text } from "react-native";
import UserForm from "./components/userForm";
import Header from "../users/components/header";

export default function AddUserPage() {
  return (
    <View>
      <Header></Header>
      <UserForm />
    </View>
  );
}
