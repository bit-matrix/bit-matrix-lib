import { AddressInterface, Balance, EventListenerID, MarinaEventType, NetworkString, Recipient, SentTransaction, Utxo } from "marina-provider";
import { IWallet } from "./IWallet";
import Marina from "./marina/marina";
import { WALLET_NAME } from "./WALLET_NAME";

export class Wallet implements IWallet {
  private wallet: IWallet;

  constructor(walletName: WALLET_NAME = WALLET_NAME.MARINA) {
    if (walletName === WALLET_NAME.MARINA) this.wallet = new Marina();
    // TODO default wallet
    else this.wallet = new Marina();
  }
  public signTransaction = (pset: string): Promise<string> => this.wallet.signTransaction(pset);

  public broadcastTransaction = (signedTxHex: string): Promise<SentTransaction> => this.wallet.broadcastTransaction(signedTxHex);

  public off = (listenerId: EventListenerID): void => this.wallet.off(listenerId);

  public on = (type: MarinaEventType, callback: (payload: any) => void): string => this.wallet.on(type, callback);

  public exist = (): boolean => this.wallet.exist();

  public isEnabled = (): Promise<boolean> => this.wallet.isEnabled();

  public enable = (): Promise<void> => this.wallet.enable();

  public disable = (): Promise<void> => this.wallet.disable();

  public getNextAddress = (): Promise<AddressInterface> => this.wallet.getNextAddress();

  public getAddresses = (): Promise<AddressInterface[]> => this.wallet.getAddresses();

  public sendTransaction = (recipients: Recipient[]): Promise<SentTransaction> => this.wallet.sendTransaction(recipients);

  public getBalances = (): Promise<Balance[]> => this.wallet.getBalances();

  public getNextChangeAddress = (): Promise<AddressInterface> => this.wallet.getNextChangeAddress();

  public reloadCoins = (): Promise<void> => this.wallet.reloadCoins();

  public getCoins = (): Promise<Utxo[]> => this.wallet.getCoins();

  public getNetwork = (): Promise<NetworkString> => this.wallet.getNetwork();
}
