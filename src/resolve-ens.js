// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk"

const { API_KEY } = process.env
const config = {
	apiKey: API_KEY,
	network: Network.ETH_MAINNET
}
const alchemy = new Alchemy(config)

const walletAddress = "0x458d1E307CcA61C0Bea82f7663F66831175EcDe8" // replace with wallet address
const ensContractAddress = "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85"
const nfts = await alchemy.nft.getNftsForOwner(walletAddress, {
	contractAddresses: [ensContractAddress]
})

console.log(nfts)
