import { Text, View } from "react-native";
import { UserEntity } from "../../utils/Types/userType";
import { useRoute } from "@react-navigation/native";
import UserCard from "./components/user-card";

interface RouteParams {
  userData: UserEntity;
}

export default function UserProfilePage() {
  const route = useRoute();

  const { userData } = route.params as RouteParams;

  return (
    <View>
      <UserCard userData={userData}></UserCard>
    </View>
  );
}
