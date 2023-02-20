import { AccountInfo, Address, Balance, EventListenerID, MarinaEventType, MarinaProvider, NetworkString, Recipient, SentTransaction, SignedMessage, Transaction, Utxo } from "marina-provider";
export default class Marina implements MarinaProvider {
    private marina;
    constructor(marina: MarinaProvider);
    getAccountInfo(accountID: string): Promise<AccountInfo>;
    getAccountsIDs(): Promise<string[]>;
    signTransaction(pset: string): Promise<string>;
    broadcastTransaction(signedTxHex: string): Promise<SentTransaction>;
    on: (type: MarinaEventType, callback: (payload: any) => void) => string;
    off: (listenerId: EventListenerID) => void;
    exist: () => boolean;
    isEnabled: () => Promise<boolean>;
    enable: () => Promise<void>;
    disable: () => Promise<void>;
    getNextAddress(): Promise<Address>;
    getAddresses(): Promise<Address[]>;
    sendTransaction(recipients: Recipient[]): Promise<SentTransaction>;
    getNextChangeAddress(): Promise<Address>;
    getBalances(): Promise<Balance[]>;
    getCoins(): Promise<Utxo[]>;
    getNetwork(): Promise<NetworkString>;
    blindTransaction(pset: string): Promise<string>;
    signMessage(): Promise<SignedMessage>;
    getTransactions(): Promise<Transaction[]>;
    getFeeAssets(): Promise<string[]>;
    isReady(): Promise<boolean>;
    getSelectedAccount(): Promise<string>;
    createAccount(accountName: string): Promise<void>;
    useAccount(account: string): Promise<boolean>;
}
