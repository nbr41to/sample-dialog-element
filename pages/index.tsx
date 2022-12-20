import { useRef } from 'react';

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const show = () => {
    dialogRef?.current?.show();
  };
  const showModal = () => {
    dialogRef?.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef?.current?.close();
  };

  return (
    <div>
      <h1>Sample dialog element</h1>
      <button onClick={show}>show</button>
      <button onClick={showModal}>showModal</button>

      <dialog
        ref={dialogRef}
        className='border backdrop:bg-black/80 relative'
        onClick={() => console.log('aaa')}
      >
        <div className='z-10 w-40 h-40'>
          <h2>Dialog title</h2>
          <p>Dialog content</p>
          <button onClick={closeDialog}>close</button>
        </div>
      </dialog>
    </div>
  );
}
