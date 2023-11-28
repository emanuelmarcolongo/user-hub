import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import API_URL from "../../utils/Urls/API-URL";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/users`);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View>
      <Text>Welcome to Users Page</Text>
    </View>
  );
}
