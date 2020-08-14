import React from 'react';
import { Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ArticleListItem } from './ArticleListItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export const ArticleList : React.FunctionComponent = () => {
  const classes = useStyles('');
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <ArticleListItem articleId={ 1 } />
        <ArticleListItem articleId={ 2 } />
        <ArticleListItem articleId={ 3 } />
      </Grid>
      <Grid container spacing={3}>
        <ArticleListItem articleId={ 4 } />
        <ArticleListItem articleId={ 5 } />
        <ArticleListItem articleId={ 6 } />
      </Grid>
    </div>
  );
}