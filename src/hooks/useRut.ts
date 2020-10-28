import React from 'react';

import format from '../utils/format';
import isValid from '../utils/isValid';
import unformat from '../utils/unformat';

type State = {
  isValid: boolean;
  rawValue: string;
  formattedValue: string;
};

type SetRut = (value: string) => void;

export default function useRut (defaultValue = ''): [State, SetRut] {
  const [state, setState] = React.useState<State>({
    formattedValue: defaultValue,
    isValid: isValid(defaultValue),
    rawValue: defaultValue
  });

  const setRut = React.useCallback((value: string) => {
    setState({
      ...state,
      formattedValue: format(value),
      isValid: isValid(value),
      rawValue: unformat(value)
    });
  }, [state, setState]);

  return [
    state,
    setRut
  ];
}
