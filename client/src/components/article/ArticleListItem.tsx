import React from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }),
);

interface IArticleListItemProps {
  articleId:number;
}

export const ArticleListItem : React.FunctionComponent<IArticleListItemProps> = (props:IArticleListItemProps) => {
  const classes = useStyles('');
  return (
    <Grid item xs={ 3 }>
      <Paper className={classes.paper}>
        <div>
          <h1>Lorem Ipsum Dolor Sit Amet.</h1>
          <small>12 Jan. 2019</small>
        </div>
        <div>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Donec non ex nec erat rutrum 
          eleifend. Sed rhoncus molestie 
          dapibus. Nullam non finibus felis...
        </div>
        <div>
          <Link to={ `/article/${props.articleId}` }>reac more</Link>
        </div>
      </Paper>
    </Grid>
  );
}