import { ListRenderItemInfo, Text, View } from "react-native";
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
          <InfoText>{userData.id}</InfoText>
        </UserInfoContainer>

        <UserInfoContainer>
          <InfoText>{userData.name}</InfoText>
        </UserInfoContainer>

        <UserInfoContainer>
          <InfoText>{userData.email}</InfoText>
        </UserInfoContainer>
      </View>
    </UserCardContainer>
  );
}
