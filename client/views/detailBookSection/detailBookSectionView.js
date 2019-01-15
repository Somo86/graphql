import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {getBookDetailQuery} from '../../queries/queries';
import {graphql} from 'react-apollo';

const DetailBookSection = (props) => {
    debugger;
  return (
      <Dialog open={props.open}>
        <AppBar>
            <IconButton color="inherit" onClick={props.onClose} aria-label="Close">
                <CloseIcon />
            </IconButton>
        </AppBar>
          {
              props.data.book ?
                  <DialogContent>
                      <p>{props.data.book.name}</p>
                      <p>{props.data.book.genre}</p>
                  </DialogContent>
              : null
          }
      </Dialog>
  );
};

export default graphql(getBookDetailQuery, {
    options: props => {
        return {
            variables: {
                id: props.bookId
            }
        };
    }
})(DetailBookSection);
