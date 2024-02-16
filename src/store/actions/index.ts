

  /******************************************************************** le FirstName*/


  // le type de l'action
  export interface saveFirstNameAction {
    type: string;
    name: string;
  }

export const SAVE_FIRST_NAME = 'SAVE_FIRST_NAME';

export function saveFirstName(name: string): saveFirstNameAction {
    return {
      type: SAVE_FIRST_NAME,
      name,
    };
  };


  /******************************************************************** le LastName*/
  // le type de l'action
  export interface saveLastNameAction {
    type: string;
    name: string;
  }

export const SAVE_LAST_NAME = 'SAVE_LAST_NAME';

export function saveLastName(name: string): saveLastNameAction {
    return {
      type: SAVE_LAST_NAME,
      name,
    };
  };

    /******************************************************************** le Mail*/
  // le type de l'action
  export interface saveMailAction {
    type: string;
    name: string;
  }

export const SAVE_MAIL = 'SAVE_MAIL';

export function saveMail(name: string): saveMailAction {
    return {
      type: SAVE_MAIL,
      name,
    };
  };

     /******************************************************************** la compagny*/
  // le type de l'action
  export interface saveCompagnyAction {
    type: string;
    name: string;
  }

export const SAVE_COMPAGNY = 'SAVE_COMPAGNY';

export function saveCompagny(name: string): saveCompagnyAction {
    return {
      type: SAVE_COMPAGNY,
      name,
    };
  };

         /******************************************************************** la raison*/
  // le type de l'action
  export interface saveRaisonAction {
    type: string;
    name: string;
  }

export const SAVE_RAISON = 'SAVE_RAISON';

export function saveRaison(name: string): saveRaisonAction {
    return {
      type: SAVE_RAISON,
      name,
    };
  };
  

       /******************************************************************** le message*/
  // le type de l'action
  export interface saveMessageAction {
    type: string;
    name: string;
  }

export const SAVE_MESSAGE = 'SAVE_MESSAGE';

export function saveMessage(name: string): saveMessageAction {
    return {
      type: SAVE_MESSAGE,
      name,
    };
  };

  /******************************************************************** le Header*/

  // le type de l'action
export interface CheckRouteHeaderAction {
  type: string;
  route: string;
}

  // l'action qui check sur quelle page on se situt
export const CHECK_ROUTE_HEADER = 'CHECK_ROUTE_HEADER';

  export function checkRouteHeader(route: string): CheckRouteHeaderAction {
    return {
      type: CHECK_ROUTE_HEADER,
      route: route,
    };
  };


    /******************************************************************** le nettoyage du form */

  // le type de l'action
export interface cleanFormAction {
  type: string
}

  // l'action qui check sur quelle page on se situt
export const CLEAN_FORM = 'CLEAN_FORM';

  export function cleanForm(): cleanFormAction {

    
    return {
      type: CLEAN_FORM,
    };
  };