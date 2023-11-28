import React, { useState } from "react";
import {
  ButtonText,
  Container,
  Button,
  TextInputStyle,
  ErrorText,
  ErrorContainer,
  SucessText,
} from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import API_URL from "../../../../utils/Urls/API-URL";
import { Keyboard } from "react-native";

interface UserFormData {
  name: string;
  email: string;
  imgUrl: string;
  password: string;
}
export default function UserForm() {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    imgUrl: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  const [loading, isLoading] = useState(false);

  const handleInputChange = (field: keyof UserFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (validateForm()) {
      addUser();
      Keyboard.dismiss();
    }
  };

  const addUser = async () => {
    try {
      const response = await axios.post(`${API_URL}/users`, formData);
      if (response.status === 201) {
        setSucessMessage("Usuário cadastrado com sucesso!!");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 409) {
          return setErrorMessage("Email já utilizado");
        } else if (error.response.status === 400) {
          return setErrorMessage(
            "Dados inválidos, confira novamente seu formulário"
          );
        } else {
          return setErrorMessage(error.message);
        }
        return setErrorMessage("Algo deu errado, tente novamente mais tarde");
      }
    }
  };

  const validateForm = () => {
    setErrorMessage("");
    setSucessMessage("");
    if (!formData.name) {
      setErrorMessage("Nome é obrigatório.");
      return false;
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Email inválido.");
      return false;
    }

    if (!formData.password || formData.password.length < 6) {
      setErrorMessage("A senha deve ter pelo menos 6 caracteres.");
      return false;
    }

    const urlRegex = /^(http|https):\/\//;
    if (!urlRegex.test(formData.imgUrl)) {
      setErrorMessage('A URL da imagem deve começar com "http" ou "https".');
      return false;
    }

    setErrorMessage("");
    return true;
  };

  return (
    <Container>
      <TextInputStyle
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
        placeholder="John Doe"
      />

      <TextInputStyle
        value={formData.email}
        onChangeText={(text) => handleInputChange("email", text)}
        placeholder="example@email.com"
      />

      <TextInputStyle
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleInputChange("password", text)}
        placeholder="Insira sua senha"
      />

      <TextInputStyle
        value={formData.imgUrl}
        onChangeText={(text) => handleInputChange("imgUrl", text)}
        placeholder="Insira uma URL de Imagem"
      />

      {errorMessage && (
        <ErrorContainer>
          <FontAwesome5 name="exclamation-triangle" color="red" size={16} />
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorContainer>
      )}

      {sucessMessage && (
        <ErrorContainer>
          <FontAwesome5 name="thumbs-up" color="green" size={16} />
          <SucessText>{sucessMessage}</SucessText>
        </ErrorContainer>
      )}
      <Button onPress={handleSubmit}>
        <ButtonText>Adicionar Usuário</ButtonText>
      </Button>
    </Container>
  );
}
