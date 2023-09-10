import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TextField } from '@mui/material';
import styles from './MovieCard.module.css';
import foto1 from '../imagenes/foto1.jpg';
import ConfirmationModal from './ConfirmationModal';
import ModalEdit from './ModalEdit'; // Importar el componente ModalEdit

const MovieCard = ({ cardinfo, handleDelete }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedPrice, setEditedPrice] = useState('');

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    handleDelete(cardinfo.id);
    setIsDeleteModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditMode(true);
    setEditedTitle(cardinfo.titulo);
    setEditedDescription(cardinfo.descripcion);
    setEditedPrice(cardinfo.Precio);
  };

  const handleSave = () => {
    // Lógica para guardar los cambios editados
    // Aquí puedes enviar los datos al servidor, actualizar el estado, etc.
    setIsEditMode(false);
  };

  const handleCancel = () => {
    // Cancelar la edición y restaurar los valores originales
    setIsEditMode(false);
    setEditedTitle(cardinfo.titulo);
    setEditedDescription(cardinfo.descripcion);
    setEditedPrice(cardinfo.Precio);
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="card">
      <li className={styles.movieCard}>
        <img
          className={styles.movieImage}
          src={foto1}
          alt={cardinfo.title}
          width={230}
          height={230}
        />
        {isEditMode ? (
          <div>
            <TextField
              label="Título"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Descripción"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Precio"
              value={editedPrice}
              onChange={(e) => setEditedPrice(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button onClick={handleSave} color="primary">
              Guardar
            </Button>
            <Button onClick={handleCancel} color="secondary">
              Cancelar
            </Button>
          </div>
        ) : (
          <div>
            <p>Título: {cardinfo.titulo}</p>
            <p>Descripción: {cardinfo.descripcion}</p>
            <p>Precio: {cardinfo.Precio}</p>
            <div className="div">{cardinfo.title}</div>

            <Button
              className={styles.editButton}
              onClick={handleEditModalOpen}
              variant="contained"
              size="small"
              style={{ marginRight: '5px' }}
            >
              Editar
            </Button>
            <Button
              className={styles.deleteButton}
              onClick={handleDeleteModalOpen}
              variant="contained"
              size="small"
              style={{ marginLeft: '5px' }}
            >
              Eliminar
            </Button>
          </div>
        )}
      </li>

      <ModalEdit
        isOpen={isEditModalOpen}
        closeModal={closeModal}
        handleSaveChanges={(editedCardInfo) => {
          // Lógica para guardar los cambios editados
          // Aquí puedes enviar los datos al servidor, actualizar el estado, etc.
          setIsEditMode(false);
          setEditedTitle(editedCardInfo.titulo);
          setEditedDescription(editedCardInfo.descripcion);
          setEditedPrice(editedCardInfo.Precio);
        }}
        cardInfo={cardinfo}
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        closeModal={closeModal}
        handleDelete={handleConfirmDelete}
        cardinfo={cardinfo}
      />
    </div>
  );
};

export default MovieCard;
