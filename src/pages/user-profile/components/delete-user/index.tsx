import axios from "axios";
import {
  ButtonText,
  CancelButton,
  DeleteOptionsContainer,
  DeleteQuestion,
  YesButton,
  DeleteContainer,
  ErrorContainer,
  ErrorText,
  SucessText,
} from "./styles";
import API_URL from "../../../../utils/Urls/API-URL";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

interface DeleteUserComponentProps {
  userId: number;
  setDeleteVisibility: React.Dispatch<boolean>;
}

export default function DeleteUserComponent({
  setDeleteVisibility,
  userId,
}: DeleteUserComponentProps) {
  const [sucessMessage, setSucessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleDeleteUser = async () => {
    try {
      const response = await axios.put(`${API_URL}/users/delete/${userId}`);

      if (response.status === 200) {
        setSucessMessage("Usuário deletado com sucesso!!");
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          return setErrorMessage(
            "Dados inválidos, confira novamente seu formulário"
          );
        } else if (error.response.status === 404) {
          return setErrorMessage("Usuário não encontrado");
        } else {
          return setErrorMessage(error.message);
        }
      }
    }
  };
  return (
    <DeleteContainer>
      <DeleteQuestion>Tem certeza que deseja deletar o usuário?</DeleteQuestion>
      <DeleteOptionsContainer>
        <YesButton onPress={() => handleDeleteUser()}>
          <ButtonText>Sim</ButtonText>
        </YesButton>
        <CancelButton>
          <ButtonText onPress={() => setDeleteVisibility(false)}>
            Cancelar
          </ButtonText>
        </CancelButton>
      </DeleteOptionsContainer>

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
    </DeleteContainer>
  );
}
