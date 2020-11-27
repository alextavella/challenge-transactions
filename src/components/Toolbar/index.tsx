import { IconButton, Toolbar } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React from 'react';
import { Title } from './styles';

interface MyToolbarProps {
  title: string;
  onBack: () => void;
}

const MyToolbar: React.FC<MyToolbarProps> = ({ title, onBack }) => {
  return (
    <Toolbar variant="dense">
      <IconButton
        data-testid="back-button"
        edge="start"
        color="primary"
        onClick={() => onBack()}
      >
        <ArrowBackIcon />
      </IconButton>
      <Title variant="h6" color="inherit">
        {title}
      </Title>
    </Toolbar>
  );
};

export default MyToolbar;
