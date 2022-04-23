import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import usePausePlay from '../Buttons/PausePlay/usePausePlay';

const Navigation = () => {
  const [icon, label, handleClick] = usePausePlay();
  const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return matches ? (
    <BottomNavigation
      showLabels
      value={label}
      onChange={handleClick}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label={label} icon={icon} />
    </BottomNavigation>
  ) : null;
};

export default Navigation;
