import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import Button from '../Button';

import styles from './styles.module.scss';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  cancelButtonLabel?: string;
  actionButtonLabel?: string;
  actionButtonEvent?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({
  open,
  setOpen,
  title,
  children,
  actionButtonEvent,
  actionButtonLabel,
  cancelButtonLabel = 'Cancel',
}) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog
      as='div'
      auto-reopen='true'
      className={styles.wrapper}
      onClose={setOpen}
    >
      <div className={styles.content}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className={styles.translation} />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          enterTo='opacity-100 translate-y-0 sm:scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 translate-y-0 sm:scale-100'
          leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
        >
          <div className={styles.mainContentWrapper}>
            <div>
              <div className={styles.mainContent}>
                <Dialog.Title as='h3' className={styles.title}>
                  {title}
                </Dialog.Title>
              </div>
              {children}
            </div>
            <div className={styles.buttonWrapper}>
              {actionButtonLabel && (
                <Button label={actionButtonLabel} onClick={actionButtonEvent} />
              )}
              <Button
                label={cancelButtonLabel}
                onClick={() => setOpen(false)}
                colorType='secondary'
              />
            </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
);

export default Modal;
