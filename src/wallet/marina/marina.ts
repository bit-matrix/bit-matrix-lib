import {
  AccountInfo,
  Address,
  Balance,
  EventListenerID,
  MarinaEventType,
  MarinaProvider,
  NetworkString,
  Recipient,
  SentTransaction,
  SignedMessage,
  Transaction,
  Utxo,
} from "marina-provider";

export default class Marina implements MarinaProvider {
  private marina: MarinaProvider | undefined;

  constructor(marina: MarinaProvider) {
    this.marina = marina;
  }
  getAccountInfo(accountID: string): Promise<AccountInfo> {
    if (!this.exist() || !this.marina) throw new Error("Marina wallet disabled.");
    return this.marina.getAccountInfo(accountID);
  }

  getAccountsIDs(): Promise<string[]> {
    throw new Error("Method not implemented.");
  }

  signTransaction(pset: string): Promise<string> {
    if (this.exist() && this.marina) return this.marina.signTransaction(pset);

    throw new Error("Marina wallet disabled.");
  }

  broadcastTransaction(signedTxHex: string): Promise<SentTransaction> {
    if (this.exist() && this.marina) return this.marina.broadcastTransaction(signedTxHex);

    throw new Error("Marina wallet disabled.");
  }

  on(type: MarinaEventType, callback: (payload: any) => void): string {
    if (this.exist() && this.marina) return this.marina.on(type, callback);

    return "Marina wallet disabled.";
  };

  off(listenerId: EventListenerID): void {
    if (this.exist() && this.marina) this.marina.off(listenerId);
  };

  exist(): boolean {
    return typeof this.marina !== "undefined";
  }

  isEnabled(): Promise<boolean> {
    if (this.exist() && this.marina) return this.marina.isEnabled();
    // throw "Install Marina first";
    return Promise.resolve(false);
  };

  enable(): Promise<void> {
    if (this.exist() && this.marina) return this.marina.enable();
    // else throw "Install Marina first";
    return Promise.resolve();
  };

  disable(): Promise<void> {
    if (this.exist() && this.marina) return this.marina.disable();
    // else throw "Install Marina first";
    return Promise.resolve();
  };

  getNextAddress(): Promise<Address> {
    if (this.exist() && this.marina) return this.marina.getNextAddress();
    // else throw "Install Marina first";
    throw new Error("Marina wallet disabled.");
  }

  getAddresses(): Promise<Address[]> {
    if (this.exist() && this.marina) return this.marina.getAddresses();
    // else throw "Install Marina first";
    throw new Error("Marina wallet disabled.");
  }

  sendTransaction(recipients: Recipient[]): Promise<SentTransaction> {
    if (this.exist() && this.marina) return this.marina.sendTransaction(recipients);
    // else throw "Install Marina first";
    throw new Error("Marina wallet disabled.");
  }

  getNextChangeAddress(): Promise<Address> {
    if (this.exist() && this.marina) return this.marina.getNextChangeAddress();

    throw new Error("Marina wallet disabled.");
  }

  getBalances(): Promise<Balance[]> {
    if (this.exist() && this.marina) return this.marina.getBalances();
    // else throw "Install Marina first";
    throw new Error("Marina wallet disabled.");
  }

  getCoins(): Promise<Utxo[]> {
    if (this.exist() && this.marina) return this.marina.getCoins();
    return Promise.reject("Marina wallet disabled.");
  }

  getNetwork(): Promise<NetworkString> {
    if (this.exist() && this.marina) return this.marina.getNetwork();
    return Promise.reject("Marina wallet disabled.");
  }

  blindTransaction(pset: string): Promise<string> {
    return this.marina?.blindTransaction(pset) || Promise.reject("Marina wallet disabled.");
  }

  signMessage(/*message: string*/): Promise<SignedMessage> {
    throw new Error("Method not implemented.");
  }

  getTransactions(): Promise<Transaction[]> {
    throw new Error("Method not implemented.");
  }

  getFeeAssets(): Promise<string[]> {
    throw new Error("Method not implemented.");
  }

  isReady(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  getSelectedAccount(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  createAccount(accountName: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  useAccount(account: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  importScript(accountName: string, scriptHex: string, blindingPrivateKey?: string | undefined): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
