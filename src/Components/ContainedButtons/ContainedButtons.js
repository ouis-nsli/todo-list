import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GlobalContext from '../../Context/Global/GlobalContext';
import { useHistory } from 'react-router-dom';

export default function ContainedButtons({
  placeholder,
  bgColor,
  width,
  APIaction,
  data,
  UIaction,
}) {
  const history = useHistory();
  const globalContext = useContext(GlobalContext);
  const { toggleMessage } = globalContext;
  const handleClick = () => {
    if (data.title === '' || data.subject === '') {
      toggleMessage('All filed requireed.', 'error', true);
    } else if (placeholder === 'ADD' || placeholder === 'EDIT') {
      APIaction.mutate({
        title: data.title,
        subject: data.subject,
      });
      UIaction(false);
    } else if (placeholder === 'BACK') {
      history.push('/');
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        style={{
          borderRadius: '4px',
          backgroundColor: bgColor,
          width: width,
        }}
        onClick={handleClick}
      >
        <p>{placeholder}</p>
      </Button>
    </Stack>
  );
}
ContainedButtons.defaultProps = {
  placeholder: 'ADD',
  bgColor: '#5EB149',
  width: '107px',
  APIaction: '',
  data: {
    title: '',
    subject: '',
  },
  UIaction: '',
};
