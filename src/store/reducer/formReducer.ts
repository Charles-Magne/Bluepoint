import {
  SAVE_LAST_NAME,
  SAVE_FIRST_NAME,
  SAVE_MAIL,
  SAVE_COMPAGNY,
  SAVE_MESSAGE,
  SAVE_RAISON,
  CLEAN_FORM
} from "../actions/index";

// Ici on defini la structure de notre state
export interface FormeState {
  firstName: string;
  lastName: string;
  mail: string;
  Company: string;
  Reason: string;
  message: string;
}

// Ici on defini l'etat initial de notre state
export const initialState: FormeState = {
  firstName: "",
  lastName: "",
  mail: "",
  Company: "",
  Reason: "",
  message: "",
};

// ***********************Définition de l'action FIRSTNAME
interface saveFirstNameAction {
  type: typeof SAVE_FIRST_NAME;
  name: string;
}

// ****************Définition de l'action LASTNAME
interface saveLastNameAction {
  type: typeof SAVE_LAST_NAME;
  name: string;
}

// ****************Définition de l'action Mail
interface saveMailAction {
  type: typeof SAVE_MAIL;
  name: string;
}

// ****************Définition de l'action Compagny
interface saveCompagnyAction {
  type: typeof SAVE_COMPAGNY;
  name: string;
}

// ****************Définition de l'action Raison
interface saveRaisonAction {
  type: typeof SAVE_RAISON;
  name: string;
}

// ****************Définition de l'action Message
interface saveMessageAction {
  type: typeof SAVE_MESSAGE;
  name: string;
}

// ****************Définition de l'action nettoyage
interface cleanFormAction {
  type: typeof CLEAN_FORM;
}


// On reagie en fonction des actions
function formReducer(
  state: FormeState = initialState,
  action:
    | saveLastNameAction
    | saveFirstNameAction
    | saveMailAction
    | saveCompagnyAction
    | saveMessageAction
    | saveMessageAction
    | saveRaisonAction
    | cleanFormAction
): FormeState {
  switch (action.type) {
    // POur le firstName
    case SAVE_FIRST_NAME:
      return { ...state, firstName: action.name };
    // pour le lastname
    case SAVE_LAST_NAME:
      return { ...state, lastName: action.name };
    // pour le Mail
    case SAVE_MAIL:
      return { ...state, mail: action.name };
    // pour la compagny
    case SAVE_COMPAGNY:
      return { ...state, Company: action.name };
    // pour le message
    case SAVE_MESSAGE:
      return { ...state, message: action.name };
    // pour la raison
    case SAVE_RAISON:
      return { ...state, Reason: action.name };
    case CLEAN_FORM:
        return {...state, firstName: "",
        lastName: "",
        mail: "",
        Company: "",
        Reason: "",
        message: "", }
    default:
      return state;
  }
}

export default formReducer;
