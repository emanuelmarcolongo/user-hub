import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  padding: 20px;
`;

export const TextInputStyle = styled(TextInput)`
  height: 40px;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  width: 100%;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #3498db;
  padding: 10px;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
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
