import React from 'react';
import { FormControl } from '@material-ui/core';

export const CommentForm : React.FunctionComponent = () => {
  const handleSubmit = () => {
    // service.Create();
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        
      </FormControl>
    </form>
  );
}