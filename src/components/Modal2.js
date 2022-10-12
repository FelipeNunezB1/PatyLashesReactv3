import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Form2 from './Form2(CardInfo)/Form2'
import './Eyebrows.css'


export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className='BotonAgregarNew'>
                <Button variant="outlined" color="primary" onClick={handleOpen}>Agregar servicio</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className='ModalReserva' sx={{ textAlign: 'center' }} >
                    <div >
                        {open && <Form2 closeModal={setOpen} />}
                        <Button variant="outlined" color="secondary" style={{ marginBottom: 30 }} onClick={handleClose}>Cerrar</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
