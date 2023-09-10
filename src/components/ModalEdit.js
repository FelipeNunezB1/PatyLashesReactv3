import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Input, Box } from '@mui/material';
import TextField from '@mui/material/TextField';


const EditModal = ({ isOpen, closeModal, handleSaveChanges, cardInfo }) => {
    const [editedCardInfo, setEditedCardInfo] = useState(cardInfo);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedCardInfo((prevCardInfo) => ({
            ...prevCardInfo,
            [name]: value,
        }));
    };

    const handleConfirmSaveChanges = () => {
        handleSaveChanges(editedCardInfo);
        closeModal();
    };

    const handleCancel = () => {
        closeModal();
    };

    return (
        <Dialog open={isOpen} onClose={closeModal} maxWidth="xs">
            <DialogTitle>Editar Card</DialogTitle>

            <Box open={isOpen} onClose={closeModal}
                component="form"
                /* sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }} */

                autoComplete="off"
            >

                <TextField
                    id="outlined-helperText"
                    label="Titulo"
                    name="titulo"
                    value={editedCardInfo.titulo}
                    onChange={handleChange}
                />

            </Box>

            <DialogActions>
                <Button onClick={handleConfirmSaveChanges} color="primary">
                    Guardar cambios
                </Button>
                <Button onClick={handleCancel} color="secondary">
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditModal;
