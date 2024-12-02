import { useReducer, useCallback } from "react";
import { formsReducer, FORM_ACTIONS } from "../reducers/forms";

export const useForm = (initialState) => {
  const [state, dispatch] = useReducer(formsReducer, initialState);

  const setField = useCallback((field, value) => {
    dispatch({ type: FORM_ACTIONS.SET_FIELD, field, value });
  }, []);

  const setError = useCallback((error) => {
    dispatch({ type: FORM_ACTIONS.SET_ERROR, error });
  }, []);

  const setLoading = useCallback((isLoading) => {
    dispatch({ type: FORM_ACTIONS.SET_LOADING, isLoading });
  }, []);

  const resetForm = useCallback(() => {
    dispatch({ type: FORM_ACTIONS.RESET_FORM, initialState });
  }, [initialState]);

  const setForm = useCallback((fields) => {
    dispatch({ type: FORM_ACTIONS.SET_FORM, fields });
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: FORM_ACTIONS.CLEAR_ERROR });
  }, []);

  return {
    state,
    setField,
    setError,
    setLoading,
    resetForm,
    setForm,
    clearError,
  };
};
