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
  setFormVisibility: React.Dispatch<boolean>;
  formVisibility: boolean;
  deleteVisibilty: boolean;
  setDeleteVisibility: React.Dispatch<boolean>;
}

export default function UserCard({
  deleteVisibilty,
  setDeleteVisibility,
  setFormVisibility,
  formVisibility,
  userData,
}: UserCardProps) {
  const toggleFormVisibility = () => {
    if (formVisibility === false) {
      setDeleteVisibility(false);
    }
    setFormVisibility(!formVisibility);
  };

  const toggleDeleteVisibility = () => {
    if (deleteVisibilty === false) {
      setFormVisibility(false);
    }
    setDeleteVisibility(!deleteVisibilty);
  };
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
          <ButtonText onPress={toggleDeleteVisibility}>
            Deletar Usuário
          </ButtonText>
        </DeleteButton>
        <EditButton onPress={toggleFormVisibility}>
          <ButtonText>Editar Usuário</ButtonText>
        </EditButton>
      </ButtonsContainer>
    </UserCardContainer>
  );
}
