import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { HeaderContainer, HeaderText, IconContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <IconContainer>
        <FontAwesome5 name="users" color="#fff" size={24} />
      </IconContainer>
      <HeaderText>UserHub</HeaderText>
    </HeaderContainer>
  );
}
