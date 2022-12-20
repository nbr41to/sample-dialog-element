import { useRef } from 'react';
import { Dialog } from '../src/Dialog';
import { useDialog } from '../src/useDialog';

const Home = () => {
  const { ref, showModal, closeModal } = useDialog();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div>
      <h1>Sample dialog element</h1>
      <button onClick={showModal}>showModal</button>
      <button onClick={openDialog}>openModal</button>

      <dialog ref={dialogRef} onClick={closeDialog}>
        <div onClick={(e) => e.stopPropagation()}>
          <h2>Dialog title</h2>
          <p>Dialog content</p>
          <button onClick={closeDialog}>close</button>
        </div>
      </dialog>

      <Dialog ref={ref} onClose={closeModal}>
        <h2 className='text-lg'>Dialog title</h2>
        <p>Dialog content. Dialog content. Dialog content.</p>
        <button className='absolute bottom-2 right-2' onClick={closeModal}>
          close
        </button>
      </Dialog>
    </div>
  );
};

export default Home;
