import { FC, forwardRef, ReactNode, Ref } from 'react';

type Props = {
  ref: Ref<HTMLDialogElement>;
  onClose: () => void;
  children: ReactNode;
};

export const Dialog: FC<Props> = forwardRef<HTMLDialogElement, Props>(
  ({ onClose, children }, ref) => {
    return (
      <dialog
        ref={ref}
        onClick={onClose}
        className='border backdrop:bg-teal-500/50 rounded shadow-lg'
      >
        <div className='p-8' onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </dialog>
    );
  },
);

Dialog.displayName = 'Dialog'; // ESLint: react/display-nameの回避のため
