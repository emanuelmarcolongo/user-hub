import { Text, View } from "react-native";
import { UserEntity } from "../../utils/Types/userType";
import { useRoute } from "@react-navigation/native";
import UserCard from "./components/user-card";
import EditUserForm from "./components/edit-userForm";
import { useState } from "react";

interface RouteParams {
  userData: UserEntity;
}

export default function UserProfilePage() {
  const route = useRoute();
  const [formVisibility, setFormVisibility] = useState<boolean>(false);

  const { userData } = route.params as RouteParams;

  return (
    <View>
      <UserCard
        formVisibility={formVisibility}
        setFormVisibility={setFormVisibility}
        userData={userData}
      ></UserCard>
      {formVisibility && <EditUserForm userData={userData}></EditUserForm>}
    </View>
  );
}
