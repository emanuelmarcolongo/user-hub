import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Avatar,
  InfoText,
  UserCardContainer,
  UserInfoContainer,
  FlexView,
  DeleteButton,
  EditButton,
  ButtonsContainer,
  ButtonText,
} from "./styles";
import { UserEntity } from "../../../../utils/Types/userType";

interface UserCardProps {
  userData: UserEntity;
}

export default function UserCard({ userData }: UserCardProps) {
  return (
    <UserCardContainer>
      <FlexView>
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
      </FlexView>
      <ButtonsContainer>
        <DeleteButton>
          <ButtonText>Deletar Usuário</ButtonText>
        </DeleteButton>
        <EditButton>
          <ButtonText>Editar Usuário</ButtonText>
        </EditButton>
      </ButtonsContainer>
    </UserCardContainer>
  );
}