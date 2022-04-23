import Pause from '@mui/icons-material/Pause';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createPost } from '../../../graphql/mutations';

const PAUSE_LABEL = 'Pause';
const PLAY_LABEL = 'Play';

async function createNewTodo() {
  const todo = {
    title: 'Use AppSync',
    // description: `Realtime and Offline (${new Date().toLocaleString()})`,
  };

  return API.graphql(graphqlOperation(createPost, { input: todo }));
}

const usePausePlay = () => {
  const [play, setPlay] = useState(false);
  const [text, setText] = useState(PAUSE_LABEL);

  const handleClick = () => {
    setPlay(!play);
    // setText(play ? PAUSE_LABEL : PLAY_LABEL);
    createNewTodo().then((r) => {
      console.log(r);
      setText(play ? PAUSE_LABEL : PLAY_LABEL);
    });
  };

  const icon = play ? <PlayArrow /> : <Pause />;

  return [icon, text, handleClick];
};

export default usePausePlay;
