import {
  ChainId,
  CHAIN_ID_ETH,
  CHAIN_ID_SOLANA,
  CHAIN_ID_TERRA,
} from "@certusone/wormhole-sdk";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { Transaction } from "../store/transferSlice";
import { CLUSTER } from "../utils/consts";

const useStyles = makeStyles((theme) => ({
  tx: {
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
  viewButton: {
    marginTop: theme.spacing(1),
  },
}));

export default function ShowTx({
  chainId,
  tx,
}: {
  chainId: ChainId;
  tx: Transaction;
}) {
  const classes = useStyles();
  const showExplorerLink =
    CLUSTER === "testnet" ||
    CLUSTER === "mainnet" ||
    (CLUSTER === "devnet" &&
      (chainId === CHAIN_ID_SOLANA || chainId === CHAIN_ID_TERRA));
  const explorerAddress =
    chainId === CHAIN_ID_ETH
      ? `https://${CLUSTER === "testnet" ? "goerli." : ""}etherscan.io/tx/${
          tx?.id
        }`
      : chainId === CHAIN_ID_SOLANA
      ? `https://explorer.solana.com/tx/${tx?.id}${
          CLUSTER === "testnet"
            ? "?cluster=testnet"
            : CLUSTER === "devnet"
            ? "?cluster=custom&customUrl=http%3A%2F%2Flocalhost%3A8899"
            : ""
        }`
      : chainId === CHAIN_ID_TERRA
      ? `https://finder.terra.money/${
          CLUSTER === "devnet"
            ? "localterra"
            : CLUSTER === "testnet"
            ? "bombay-12"
            : "columbus-5"
        }/tx/${tx?.id}`
      : undefined;
  const explorerName =
    chainId === CHAIN_ID_ETH
      ? "Etherscan"
      : chainId === CHAIN_ID_TERRA
      ? "Finder"
      : "Explorer";

  return (
    <div className={classes.tx}>
      <Typography noWrap component="div" variant="body2">
        {tx.id}
      </Typography>
      {showExplorerLink && explorerAddress ? (
        <Button
          href={explorerAddress}
          target="_blank"
          size="small"
          variant="outlined"
          className={classes.viewButton}
        >
          View on {explorerName}
        </Button>
      ) : null}
    </div>
  );
}