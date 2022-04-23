import { Divider, Drawer, ToggleButton, Toolbar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Buttons from '../Buttons';

const ModalProps = { keepMounted: true };

const Left = ({ mode, onToggleTheme }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return matches ? (
    <Drawer open variant="permanent" ModalProps={ModalProps}>
      <Toolbar>
        <ToggleButton value={mode} onClick={onToggleTheme} />
      </Toolbar>
      <Divider />
      <Buttons />
      <Divider />
    </Drawer>
  ) : null;
};

export default Left;
