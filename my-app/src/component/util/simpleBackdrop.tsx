import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type OpenProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;

};

export default function SimpleBackdrop({ setOpen , open}: OpenProps)  {


  return (
    <div>
     
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
     
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}