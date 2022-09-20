import React, { useState } from 'react';

import ScanModal from '../../components/_pages/ScanModal';
import Button from '../../components/_ui/Button';

import styles from './styles.module.scss';

const Home: React.FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [code, setCode] = useState('');
  console.log('code: ', code);
  return (
    <div className={styles.wrapper}>
      <Button
        label='scan'
        onClick={() => {
          setIsModal(true);
        }}
        className={styles.scan}
      />
      <p className={styles.code}>{code}</p>
      <ScanModal isModal={isModal} setIsModal={setIsModal} setCode={setCode} />
    </div>
  );
};

export default Home;
