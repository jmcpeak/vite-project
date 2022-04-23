import { createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';

export const DARK = 'dark';
export const LIGHT = 'light';

const useToggleTheme = () => {
  const [mode, setMode] = useState(LIGHT);
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  const handleToggleTheme = () => {
    setMode((prevMode) => (prevMode === LIGHT ? DARK : LIGHT));
  };

  return [theme, mode, handleToggleTheme];
};

export default useToggleTheme;
