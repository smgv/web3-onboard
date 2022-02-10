import type {
  RequestPatch,
  EventCallback,
  AccountSelectAPI,
  SelectAccountOptions,
  BasePath,
  DerivationPath,
  Asset,
  ScanAccounts,
  ScanAccountsOptions,
  AccountAddress,
  Account,
  AccountsList,
  AppMetadata,
  RecommendedInjectedWallets,
  WalletInit,
  WalletHelpers,
  WalletExclusions,
  InjectedWalletOptions,
  APIKey,
  Device,
  WalletModule,
  GetInterfaceHelpers,
  InjectedWalletModule,
  Platform,
  DeviceOS,
  DeviceBrowser,
  DeviceOSName,
  DeviceBrowserName,
  DeviceType,
  ChainId,
  RpcUrl,
  WalletInterface,
  ProviderMessage,
  ProviderInfo,
  ProviderAccounts,
  ProviderEvent,
  SimpleEventEmitter,
  ConnectListener,
  DisconnectListener,
  MessageListener,
  ChainListener,
  AccountsListener,
  Balance,
  EthAccountsRequest,
  EthBalanceRequest,
  EIP1102Request,
  SelectAccountsRequest,
  EIP3326Request,
  EIP3085Request,
  EthChainIdRequest,
  EthSignTransactionRequest,
  EthSignMessageRequest,
  EIP712Request,
  AddChainParams,
  EIP1193Provider,
  MeetOneProvider,
  BinanceProvider,
  CustomWindow,
  InjectedProvider,
  Chain,
  TokenSymbol,
  CustomNetwork,
  TransactionObject
} from './types'

export {
  ProviderIdentityFlag,
  ProviderLabel,
  ProviderRpcErrorCode,
  InjectedNameSpace
} from './types'

export { ProviderRpcError } from './errors'
export { createEIP1193Provider } from './eip-1193'
export { default as accountSelect } from './account-select'
export { entryModal } from './entry-modal'
export { SofiaProLight, SofiaProRegular, SofiaProSemiBold } from './fonts'

export type {
  RequestPatch,
  EventCallback,
  AccountSelectAPI,
  SelectAccountOptions,
  BasePath,
  DerivationPath,
  Asset,
  ScanAccounts,
  ScanAccountsOptions,
  AccountAddress,
  Account,
  AccountsList,
  AppMetadata,
  RecommendedInjectedWallets,
  WalletInit,
  WalletHelpers,
  WalletExclusions,
  InjectedWalletOptions,
  APIKey,
  Device,
  WalletModule,
  GetInterfaceHelpers,
  InjectedWalletModule,
  Platform,
  DeviceOS,
  DeviceBrowser,
  DeviceOSName,
  DeviceBrowserName,
  DeviceType,
  ChainId,
  RpcUrl,
  WalletInterface,
  ProviderMessage,
  ProviderInfo,
  ProviderAccounts,
  ProviderEvent,
  SimpleEventEmitter,
  ConnectListener,
  DisconnectListener,
  MessageListener,
  ChainListener,
  AccountsListener,
  Balance,
  EthAccountsRequest,
  EthBalanceRequest,
  EIP1102Request,
  SelectAccountsRequest,
  EIP3326Request,
  EIP3085Request,
  EthChainIdRequest,
  EthSignTransactionRequest,
  EthSignMessageRequest,
  EIP712Request,
  AddChainParams,
  EIP1193Provider,
  MeetOneProvider,
  BinanceProvider,
  CustomWindow,
  InjectedProvider,
  Chain,
  TokenSymbol,
  CustomNetwork,
  TransactionObject
}
