import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import usePausePlay from './usePausePlay';

const PausePlay = () => {
  const [icon, text, handleClick] = usePausePlay();

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default PausePlay;
