import { Text, View } from "react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled(View)`
  width: 100%;
  height: 80px;
  background-color: #3498db;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const HeaderText = styled(Text)`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const IconContainer = styled(View)`
  margin-right: 10px;
`;
