import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Avatar,
  InfoText,
  UserCardContainer,
  UserInfoContainer,
} from "./styles";
import { UserEntity } from "../../../../utils/Types/userType";

interface UserCardProps {
  userData: UserEntity;
}

export default function UserCard({ userData }: UserCardProps) {
  return (
    <UserCardContainer>
      <Avatar
        source={{
          uri: userData.imgUrl,
        }}
      />
      <View>
        <UserInfoContainer>
          <FontAwesome5 name="hashtag" color="#000" size={16} />
          <InfoText>{userData.id}</InfoText>
        </UserInfoContainer>

        <UserInfoContainer>
          <FontAwesome5 name="user" color="#000" size={16} />
          <InfoText>{userData.name}</InfoText>
        </UserInfoContainer>

        <UserInfoContainer>
          <FontAwesome5 name="at" color="#000" size={16} />
          <InfoText>{userData.email}</InfoText>
        </UserInfoContainer>
      </View>
    </UserCardContainer>
  );
}
