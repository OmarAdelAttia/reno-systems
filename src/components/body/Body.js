import React from 'react';
import './Body.css';
import Header from '../header/Header';
import Container from './container/Container';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

function Body() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='project'>
            <Header />
            <div className='body'>
                <div className='body_left'>
                    <h2>User Management</h2>
                </div>
                <div className='body_right'>
                    <Button startIcon={<AddIcon fontSize='large' />}
                        className='add_new' variant="outlined"
                        color="primary" onClick={handleClickOpen}>
                        Add New
                        </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
                        <DialogContent>

                            <label className='model'>Name</label>
                            <TextField
                                id="name"
                                type="text"
                                fullWidth
                                className='model_form'
                            />
                            <label className='model'>User Name</label>
                            <TextField
                                id="userName"
                                type="text"
                                fullWidth
                                className='model_form'
                            />
                            <label className='model'>Email Address</label>
                            <TextField
                                id="emailAddress"
                                type="email"
                                fullWidth
                                className='model_form'
                            />
                            <label className='model'>Group</label>
                            <TextField
                                id="group"
                                type="text"
                                fullWidth
                                className='model_form'
                            />
                            <label className='model'>Status</label>
                            <TextField
                                // autoFocus
                                // margin="dense"
                                id="status"
                                // label="Status"
                                type="text"
                                fullWidth
                                className='model_form'
                            />
                        </DialogContent>
                        <Button className='reset'>
                            Reset Fields
                        </Button>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleClose} color="primary" className='add_new'>
                                Add User
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <Container />
        </div>
    )
}

export default Body
