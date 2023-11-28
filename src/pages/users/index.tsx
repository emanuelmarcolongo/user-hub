import { useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import API_URL from "../../utils/Urls/API-URL";
import UserCard from "./components/user-card";
import { UserEntity } from "../../utils/Types/userType";
import Header from "./components/header";
import { UsersContainer, ListContainer } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";

export type RootStackParamList = {
  Perfil: { userData: UserEntity };
};

export default function UsersPage() {
  const [users, setUsers] = useState<UserEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useFocusEffect(
    React.useCallback(() => {
      fetchUsers();
    }, [])
  );

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/users`);
      const activeUsers = response.data
        .reverse()
        .filter((user: UserEntity) => !user.isDeleted);
      setUsers(activeUsers);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UsersContainer>
      <Header />

      {loading && <ActivityIndicator size="large" color={"#000"} />}
      {!loading && (
        <ListContainer>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Perfil", { userData: item })
                  }
                >
                  <UserCard userData={item}></UserCard>
                </TouchableOpacity>
              );
            }}
          />
        </ListContainer>
      )}
    </UsersContainer>
  );
}
