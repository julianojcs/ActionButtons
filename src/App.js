import "./App.css"
import styled from "styled-components"
import ActionButton from "./ActionButton"
import { STATE_1, STATE_2, STATE_3 } from "./data"
import {
  FaPlus as AddIcon,
  FaMinus as DeleteIcon,
  FaEdit as EditIcon,
  FaSave as SaveIcon,
  FaTimes as CancelIcon
} from "react-icons/fa"
import { useState } from "react"

export default function App() {
  const [actionButtons, setActionButtons] = useState(STATE_1);
  const [state, setState] = useState(null);

  const handleClickActionButton = (action) => {
    switch (action) {
      case "add":
        setActionButtons({ ...STATE_3 });
        setState("new");
        break
      case "delete":
        setActionButtons(STATE_1);
        setState(null);
        break
      case "edit":
        setActionButtons({ ...STATE_3 });
        setState("edit");
        break
      case "save":
        setActionButtons({ ...STATE_2 });
        setState("view");
        break
      case "cancel":
        if (state === "view") {
          setActionButtons(STATE_1);
          setState(null);
        } else if (state === "edit") {
          setActionButtons(STATE_2);
          setState("view");
        } else if (state === "new") {
          setActionButtons(STATE_1);
          setState(null);
        }
        break
      default:
        throw new Error(`Invalid Action`);
    }
  };

  return (
    <div className="App">
      <Wrapper>
        <PainelButtons>
          <ActionButton
            disabled={actionButtons.add}
            buttonIcon={AddIcon}
            onClick={() => handleClickActionButton("add")}
            tooltip={"Incluir"}
          />
          <ActionButton
            disabled={actionButtons.delete}
            buttonIcon={DeleteIcon}
            onClick={() => handleClickActionButton("delete")}
            tooltip={"Excluir"}
          />
          <ActionButton
            disabled={actionButtons.edit}
            buttonIcon={EditIcon}
            onClick={() => handleClickActionButton("edit")}
            tooltip={"Editar"}
          />
          <ActionButton
            disabled={actionButtons.save}
            buttonIcon={SaveIcon}
            onClick={() => handleClickActionButton("save")}
            tooltip={"Salvar"}
          />
          <ActionButton
            disabled={actionButtons.cancel}
            buttonIcon={CancelIcon}
            onClick={() => handleClickActionButton("cancel")}
            tooltip={"Cancelar"}
          />
        </PainelButtons>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem;
  align-self: center;
`;

const PainelButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 500px;
`;
