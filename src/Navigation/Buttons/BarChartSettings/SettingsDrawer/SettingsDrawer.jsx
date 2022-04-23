import { Divider, Drawer, Toolbar } from '@mui/material';

const ModalProps = { keepMounted: true };

const SettingsDrawer = ({ open }) => {
  return (
    <Drawer open={open} variant="temporary" ModalProps={ModalProps}>
      <Toolbar />
      <Divider />
      Stuff here
    </Drawer>
  );
};

export default SettingsDrawer;
