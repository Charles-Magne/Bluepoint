import { CHECK_ROUTE_HEADER } from '../actions';

// Définition de l'état initial de la page
export interface PageState {
  page: string;
}

// Initialisation de l'état initial
export const initialState: PageState = {
  page: '',
};

// Définition de l'action CheckRouteHeader
interface CheckRouteHeaderAction {
  type: typeof CHECK_ROUTE_HEADER; 
  route: string; 
}

// lorsquon chope une action ... 
export function pageReducer(state: PageState = initialState, action: CheckRouteHeaderAction) {
  switch (action.type) {
    case CHECK_ROUTE_HEADER:  
        return {
          ...state,
          page: action.route,
  };
    // V ON ne touche pas 
    default: // Cas par défaut si l'action n'est pas reconnue
      return state;
  }
}

export const selectPage = (state: PageState) => state.page;


export default pageReducer; // Export du reducer