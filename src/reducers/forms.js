// Action Types
export const FORM_ACTIONS = {
  SET_FIELD: "SET_FIELD",
  SET_ERROR: "SET_ERROR",
  SET_LOADING: "SET_LOADING",
  RESET_FORM: "RESET_FORM",
  SET_FORM: "SET_FORM",
  CLEAR_ERROR: "CLEAR_ERROR",
  SET_SUBMITTED: "SET_SUBMITTED"
};

// Initial States
export const LOGIN_FORM = {
  fields: {
    email: "",
    password: "",
  },
  error: "",
  isLoading: false,
};

export const REGISTER_FORM = {
  fields: {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  },
  error: "",
  isLoading: false,
};

// Reducer
export const formsReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.SET_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.field]: action.value,
        },
      };
    case FORM_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case FORM_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case FORM_ACTIONS.RESET_FORM:
      return action.initialState;
    case FORM_ACTIONS.SET_FORM:
      return {
        ...state,
        fields: action.fields,
      };
    case FORM_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    case FORM_ACTIONS.SET_SUBMITTED:
      return {
        ...state,
        isSubmitted: action.isSubmitted,
      };
    default:
      return state;
  }
};
