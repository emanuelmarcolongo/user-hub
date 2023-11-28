import { useState } from "react";
import { FlatList } from "react-native";
import axios from "axios";
import API_URL from "../../utils/Urls/API-URL";
import UserCard from "./components/user-card";
import { UserEntity } from "../../utils/Types/userType";
import Header from "./components/header";
import { UsersContainer, ListContainer } from "./styles";

export default function UsersPage() {
  const [users, setUsers] = useState<UserEntity[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
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
            return <UserCard userData={item}></UserCard>;
          }}
        />
      </ListContainer>
    </UsersContainer>
  );
}
