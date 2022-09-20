import React from 'react';

import Container from '../../components/_ui/Container';

import styles from './styles.module.scss';

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <Container>
    <p className={styles.wrapper}>Barcode Scan</p>
    {children}
  </Container>
);

export default MainLayout;
