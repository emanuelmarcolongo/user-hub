import styled from "styled-components";
import { View, Image, Text, TouchableOpacity } from "react-native";

export const UserCardContent = styled(View)``;

export const UserCardContainer = styled(View)`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;

export const FlexView = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 15px;
`;

export const UserInfoContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled(Text)`
  margin-left: 10px;
`;

export const EditButton = styled(TouchableOpacity)`
  padding: 10px;
  border-radius: 20px;
  background-color: orange;
`;

export const DeleteButton = styled(TouchableOpacity)`
  padding: 10px;
  border-radius: 20px;
  background-color: red;
`;

export const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
`;

export const ButtonsContainer = styled(View)`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;
