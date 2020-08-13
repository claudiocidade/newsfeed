import React from 'react';
import { Link } from 'react-router-dom';
import { CommentForm } from '../components/comment/CommentForm';
import { CommentList } from '../components/comment/CommentList';

export const Article = () => {
  return (
    <div>
      <div>
        <Link to="/">Return to feed</Link>
      </div>
      <br />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec non ex nec erat rutrum eleifend. Sed rhoncus molestie 
        dapibus. Nullam non finibus felis. Curabitur feugiat, purus 
        quis maximus ullamcorper, leo libero dignissim nisl, ut porta 
        diam lacus eu urna. Maecenas laoreet sapien vitae nulla venenatis 
        pretium. Nulla dictum urna in ullamcorper lacinia. In hac habitasse 
        platea dictumst. Cras in egestas dui. Orci varius natoque penatibus 
        et magnis dis parturient montes, nascetur ridiculus mus. Mauris eget 
        ipsum id lectus sollicitudin efficitur id eu arcu.
      </div>
      <div>
        <CommentForm />
      </div>
      <div>
        <CommentList />
      </div>
    </div>
  );
}