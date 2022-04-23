import BarChart from '@mui/icons-material/BarChart';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useOpen } from 'hooks';
import SettingsDrawer from './SettingsDrawer';

const BarChartSettings = () => {
  const [open, handleClick] = useOpen();

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Chart Settings" />
      </ListItemButton>
      <SettingsDrawer open={open} />
    </>
  );
};

export default BarChartSettings;
