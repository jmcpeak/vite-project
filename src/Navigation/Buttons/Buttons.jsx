import List from '@mui/material/List';
import BarChartSettings from './BarChartSettings';
import PausePlay from './PausePlay';

const Buttons = () => {
  return (
    <List>
      <PausePlay />
      <BarChartSettings />
    </List>
  );
};

export default Buttons;
