import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
class SnackbarMaker extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        message: props.message,
        open: true,
      };
  }


  handleClose = () => {
    this.setState({ open: false });
  };
  

  render() {
    const { vertical, horizontal, open } = this.state;
    return (
        <div>
        <Snackbar
          anchorOrigin={{ vertical:"top", horizontal:"center" }}
          open={this.props.open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default SnackbarMaker;