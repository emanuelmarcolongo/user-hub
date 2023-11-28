import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const DeleteContainer = styled(View)`
  margin-top: 70px;
`;

export const DeleteOptionsContainer = styled(View)`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const DeleteQuestion = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const YesButton = styled(TouchableOpacity)`
  width: 40%;
  padding: 10px;
  background-color: green;
  border-radius: 20px;
`;

export const CancelButton = styled(TouchableOpacity)`
  width: 40%;
  padding: 10px;
  background-color: #aaa;
  border-radius: 20px;
`;

export const ButtonText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const ErrorText = styled(Text)`
  color: red;
  margin-left: 10px;
  font-weight: bold;
`;

export const ErrorContainer = styled(View)`
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SucessText = styled(Text)`
  color: green;
  margin-left: 10px;
  font-weight: bold;
`;
