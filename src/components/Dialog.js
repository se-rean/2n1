import React, { memo } from 'react';
 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: '60%',
  width: '100%', 
  height: '100%', 
  background: '(0px, 0px, 0px, 0.2px)',
  // boxShadow: 24,
  p: 4,
};

const CustomModal = ({
  isOpen = false,
  title,
  handleClose,
  children,
  customStyle = {
    width: '80%',
    maxWidth: 600
  },
  alignTitle = 'left'
}) => {
  return <>
    <Modal
      open={isOpen}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <>
      <button onClick={() => handleClose()} className='absolute top-16 lg:top-10 right-10 z-50'>close</button>
      <Box onClick={() => handleClose()} sx={style}>
        </Box>  
        {children}
      </>
        
    </Modal>
  </>;
};

export default memo(CustomModal);