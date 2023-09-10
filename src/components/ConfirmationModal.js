import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const ConfirmationModal = ({ isOpen, closeModal, handleDelete, cardinfo }) => {
    const handleConfirmDelete = () => {
        handleDelete(cardinfo.id);
        closeModal();
      };
      

    return (
        <Dialog open={isOpen} onClose={closeModal}>
            <DialogTitle>Confirmación</DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    ¿Estás seguro de eliminar este elemento?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirmDelete} color="primary">
                    Confirmar
                </Button>
                <Button onClick={closeModal} color="secondary">
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationModal;
