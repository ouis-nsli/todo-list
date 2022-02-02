import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './Message.css';

export default function BasicAlerts({ messageType, messageContent }) {
  return (
    <div className="message-wraper">
      <Stack sx={{ width: '100%' }} spacing={2}>
        {messageType === 'error' && (
          <Alert severity="error">{messageContent}</Alert>
        )}{' '}
        {messageType === 'warning' && (
          <Alert severity="warning">{messageContent}</Alert>
        )}{' '}
        {messageType === 'info' && (
          <Alert severity="info">{messageContent}</Alert>
        )}{' '}
        {messageType === 'success' && (
          <Alert severity="success">{messageContent}</Alert>
        )}
      </Stack>
    </div>
  );
}
