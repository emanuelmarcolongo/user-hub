import { Text, View } from "react-native";
import { UserEntity } from "../../utils/Types/userType";
import { useRoute } from "@react-navigation/native";
import UserCard from "./components/user-card";
import EditUserForm from "./components/edit-userForm";
import { useState } from "react";
import DeleteUserComponent from "./components/delete-user";

interface RouteParams {
  userData: UserEntity;
}

export default function UserProfilePage() {
  const route = useRoute();
  const [formVisibility, setFormVisibility] = useState<boolean>(false);
  const [deleteVisibilty, setDeleteVisibility] = useState<boolean>(false);
  const { userData } = route.params as RouteParams;
  const [displayData, setDisplayData] = useState<UserEntity>(userData);

  return (
    <View>
      <UserCard
        deleteVisibilty={deleteVisibilty}
        setDeleteVisibility={setDeleteVisibility}
        formVisibility={formVisibility}
        setFormVisibility={setFormVisibility}
        userData={displayData}
      ></UserCard>
      {formVisibility && (
        <EditUserForm
          setDisplayData={setDisplayData}
          userData={displayData}
        ></EditUserForm>
      )}
      {deleteVisibilty && (
        <DeleteUserComponent
          setDeleteVisibility={setDeleteVisibility}
          userId={userData.id}
        ></DeleteUserComponent>
      )}
    </View>
  );
}
