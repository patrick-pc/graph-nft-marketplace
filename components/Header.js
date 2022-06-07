import { ConnectButton } from 'web3uikit'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="py-4 border-b-2 flex flex-row justify-between items-center">
      <Link href="/">
        <a>
          <h1 className="py-2 px-4 font-bold text-xl">NFT Marketplace</h1>
        </a>
      </Link>
      <div className="flex flex-row items-center">
        <Link href="/">
          <a className="mr-4 py-2 px-4">Home</a>
        </Link>
        <Link href="/sell">
          <a className="mr-4 py-2 px-4">Sell NFTs</a>
        </Link>
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  )
}

export default Header
