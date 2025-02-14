import {
  MAINNET_USDC_PRIZE_DISTRIBUTOR_ADDRESS,
  AVALANCHE_USDC_PRIZE_DISTRIBUTOR_ADDRESS,
  POLYGON_USDC_PRIZE_DISTRIBUTOR_ADDRESS,
  MAINNET_USDC_TICKET_ADDRESS,
  POLYGON_USDC_TICKET_ADDRESS,
  AVALANCHE_USDC_TICKET_ADDRESS,
} from '../constants'

function getPrizeDistributorAddress(chainId: string | number, ticket: string): string {
  if (chainId === '1' && ticket === MAINNET_USDC_TICKET_ADDRESS) {
    return MAINNET_USDC_PRIZE_DISTRIBUTOR_ADDRESS
  }

  if (chainId === '137' && ticket === POLYGON_USDC_TICKET_ADDRESS) {
    return POLYGON_USDC_PRIZE_DISTRIBUTOR_ADDRESS
  }

  if (chainId === '43114' && ticket === AVALANCHE_USDC_TICKET_ADDRESS) {
    return AVALANCHE_USDC_PRIZE_DISTRIBUTOR_ADDRESS
  }

  throw new Error(
    `prize distributor address not defined for chainId: ${chainId} and ticket: ${ticket}`,
  )
}

export default getPrizeDistributorAddress
