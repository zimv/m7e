import React from 'react';
import { Dropdown, Menu } from 'antd';

import event, { EVENT_NAME } from '../event';
import useWalletProvider from '../wallet-provider';
import Button from '../button';
import images from '../image';
import useI18n from '../use-i18n';

import styles from './styles.module.less';

const { metaMask } = images;

export const simpleAdress = (address: string, startLength = 17, endLength = 7) => {
  if (!address) return '';

  const start = address.substring(0, startLength);
  const end = address.substr(-endLength, endLength);

  return `${start}...${end}`;
};

export const switchWallet = () => {
  event.emit(EVENT_NAME.SHOW_CHOOSE_WALLET);
};

interface Props extends React.HTMLProps<HTMLDivElement> {
  network?: any[];
}

export default function CollectWallet(props: Props) {
  const { address } = useWalletProvider({ network: props.network || [] });

  const t = useI18n();

  const menu = (
    <Menu>
      <Menu.Item onClick={switchWallet}>
        <span>{t('wallet-collect.change')}</span>
      </Menu.Item>
      <Menu.Item>{simpleAdress(address)}</Menu.Item>
    </Menu>
  );

  if (address) {
    return (
      <div {...props}>
        <Dropdown overlay={menu}>
          <img src={metaMask} className={styles['metamask-logo']} />
        </Dropdown>
      </div>
    );
  }

  return (
    // eslint-disable-next-line
    // @ts-ignore
    <Button {...props} onClick={switchWallet} type="gradient">
      {address ? simpleAdress(address) : t('wallet-collect.connect')}
    </Button>
  );
}
