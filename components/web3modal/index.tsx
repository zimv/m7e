import React from 'react';
import Web3Modal, { IProviderControllerOptions } from 'web3modal';
import Rekv from 'rekv';
import Web3 from 'web3';
// import WalletConnectProvider from '@walletconnect/web3-provider';

import { getChainData } from './utils';
import { IAssetData } from './interface';
import { apiGetAccountAssets } from './api';

interface ChainData {
  chianId: number;
  name: string;
  network: string;
  currency: {
    name: string;
    address: string;
    decimals: number;
    symbol: string;
    logoURI: string;
    balance: string;
  };
}

interface Options extends IProviderControllerOptions {
  chainList: ChainData[];
}

interface IAppState {
  fetching: boolean;
  address: string;
  web3: any;
  provider: any;
  connected: boolean;
  chainId: number;
  networkId: number;
  assets: IAssetData[];
  showModal: boolean;
  pendingRequest: boolean;
  result: any | null;
}

const INITIAL_STATE: IAppState = {
  fetching: false,
  address: '',
  web3: null,
  provider: null,
  connected: false,
  chainId: 1,
  networkId: 1,
  assets: [],
  showModal: false,
  pendingRequest: false,
  result: null,
};

const state = new Rekv<IAppState>(INITIAL_STATE);

export const ProviderContext = React.createContext<{
  data: IAppState;
  connect: () => Promise<void>;
  getAccountAssets: () => Promise<IAssetData[]>;
  resetApp: () => Promise<IAppState>;
  // @ts-ignore
}>({});

function initWeb3(provider: any) {
  const web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
        // @ts-ignore
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}

export default function Web3ModalProvider({
  children,
  options,
}: {
  children: React.ReactNode;
  options?: Options;
}) {
  const web3ModalRef = React.useRef<Web3Modal>(null);

  const value = state.useState(
    'fetching',
    'address',
    'web3',
    'provider',
    'connected',
    'chainId',
    'networkId',
    'assets',
    'showModal',
    'pendingRequest',
    'result',
  );

  const { chainId, web3, address } = value;

  const getNetwork = () => getChainData(chainId).network;

  const resetApp = async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }

    await web3ModalRef.current.clearCachedProvider();
    state.setState({ ...INITIAL_STATE });
    return INITIAL_STATE;
  };

  const getAccountAssets = async () => {
    state.setState({ fetching: true });
    try {
      // get account balances
      const assets = await apiGetAccountAssets(address, chainId);

      state.setState({ fetching: false, assets });
      return assets;
    } catch (error) {
      console.error(error); // tslint:disable-line
      state.setState({ fetching: false });
    }
  };

  const subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return;
    }
    provider.on('close', () => resetApp());
    provider.on('accountsChanged', async (accounts: string[]) => {
      await state.setState({ address: accounts[0] });
      await getAccountAssets();
    });
    provider.on('chainChanged', async (cid: number) => {
      const networkId = await web3.eth.net.getId();
      state.setState({ chainId: cid, networkId });
      await getAccountAssets();
    });

    provider.on('networkChanged', async (networkId: number) => {
      const cid = await web3.eth.chainId();
      state.setState({ chainId: cid, networkId });
      await getAccountAssets();
    });
  };

  const onConnect = async () => {
    const provider = await web3ModalRef.current.connect();

    await subscribeProvider(provider);

    const w3 = initWeb3(provider);

    const accounts = await w3.eth.getAccounts();

    const addr = accounts[0];

    const networkId = await w3.eth.net.getId();

    const cid = await w3.eth.getChainId();

    state.setState({
      web3: w3,
      provider,
      connected: true,
      address: addr,
      chainId: cid,
      networkId,
    });
    await getAccountAssets();
  };

  React.useEffect(() => {
    const params = Object.assign(
      {},
      {
        network: getNetwork(), // optional
        cacheProvider: true, // optional
        // providerOptions: {
        //   walletconnect: {
        //     package: WalletConnectProvider,
        //     options: {
        //       infuraId: process.env.REACT_APP_INFURA_ID,
        //     },
        //   },
        // },
      },
      options,
    );

    const w3Modal = new Web3Modal(params);
    web3ModalRef.current = w3Modal;

    if (w3Modal.cachedProvider) {
      onConnect();
    }
  }, [options]);

  const ctx = {
    data: value,
    connect: onConnect,
    getAccountAssets,
    resetApp,
  };

  return <ProviderContext.Provider value={ctx}>{children}</ProviderContext.Provider>;
}

export const useWalletProvider = () => {
  const ctx = React.useContext(ProviderContext);

  return ctx;
};
