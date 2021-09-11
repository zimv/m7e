import React from 'react';
import Web3Modal, { IProviderControllerOptions } from 'web3modal';
import Rekv from 'rekv';
import { ethers } from 'ethers';
import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";

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
  connect: Function;
  getAccountAssets: Function;
  resetApp: Function;
  // @ts-ignore
}>({});


function initWeb3(provider: any) {
  const web3: any = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
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

  const params = Object.assign(
    {},
    {
      network: getNetwork(), // optional
      cacheProvider: true, // optional
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: process.env.REACT_APP_INFURA_ID
          }
        },
      }
    },
    options,
  );

  const web3Modal = new Web3Modal(params);
  // const web3 = new ethers.providers.Web3Provider(provider);

  const resetApp = async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }

    await web3Modal.clearCachedProvider();
    state.setState({ ...INITIAL_STATE });
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
    provider.on('chainChanged', async (chainId: number) => {
      const networkId = await web3.eth.net.getId();
      state.setState({ chainId, networkId });
      await getAccountAssets();
    });

    provider.on('networkChanged', async (networkId: number) => {
      const chainId = await web3.eth.chainId();
      state.setState({ chainId, networkId });
      await getAccountAssets();
    });
  };

  const onConnect = async () => {
    const provider = await web3Modal.connect();

    await subscribeProvider(provider);

    const web3: any = initWeb3(provider);

    const accounts = await web3.eth.getAccounts();

    const address = accounts[0];

    const networkId = await web3.eth.net.getId();

    const chainId = await web3.eth.chainId();

    state.setState({
      web3,
      provider,
      connected: true,
      address,
      chainId,
      networkId,
    });
    await getAccountAssets();
  };

  const getAccountAssets = async () => {
    state.setState({ fetching: true });
    try {
      // get account balances
      const assets = await apiGetAccountAssets(address, chainId);

      state.setState({ fetching: false, assets });
    } catch (error) {
      console.error(error); // tslint:disable-line
      state.setState({ fetching: false });
    }
  };

  React.useEffect(() => {
    if (web3Modal.cachedProvider) {
      onConnect();
    }
  }, [null]);

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
