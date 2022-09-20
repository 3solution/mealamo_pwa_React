import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

import Modal from '../../_ui/Modal';

import styles from './styles.module.scss';

type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
};

const ScanModal: React.FC<Props> = ({ isModal, setIsModal, setCode }) => {
  const [isTorch, setIsTorch] = useState(false);
  return (
    <Modal
      open={isModal}
      setOpen={setIsModal}
      title='Barcode Scanner'
      actionButtonLabel={isTorch ? 'Torch Off' : 'Torch On'}
      cancelButtonLabel='Cancel'
      actionButtonEvent={() => {
        setIsTorch((prev) => !prev);
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.code}>
          Product Code:
          <input type='text' className={styles.input} />
        </div>
        <div className={styles.scanArea}>
          <BarcodeScannerComponent
            torch={isTorch}
            onUpdate={(err, result: any) => {
              console.log('result: ', result);
              if (result) {
                setCode(result?.text);
                setIsModal(false);
              }
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ScanModal;
