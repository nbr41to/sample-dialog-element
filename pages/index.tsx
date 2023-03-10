import { Dialog } from '../src/Dialog';
import { useDialog } from '../src/useDialog';

const Home = () => {
  const { ref, showModal, closeModal } = useDialog();

  return (
    <div>
      <h1>Sample dialog element</h1>
      <button onClick={showModal}>showModal</button>

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
