import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import API_URL from "../../utils/Urls/API-URL";
import UserCard from "./components/user-card";
import { UserEntity } from "../../utils/Types/userType";
import Header from "./components/header";
import { UsersContainer, ListContainer } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
  Perfil: { userData: UserEntity };
};

export default function UsersPage() {
  const [users, setUsers] = useState<UserEntity[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  fetchUsers();

  return (
    <UsersContainer>
      <Header />

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
    </UsersContainer>
  );
}
