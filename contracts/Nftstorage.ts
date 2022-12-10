declare module '@ioc:Adonis/Core/Drive' {
  import { NFTStorage, RateLimiter } from 'nft.storage'

  /**
   * Configuration accepted by the gcs driver
   */
  export type NFTStorageDriverConfig = {
    driver: 'nftstorage'
    token: string
    endpoint?: URL | undefined
    rateLimiter?: RateLimiter | undefined
    did?: string | undefined
  }

  /**
   * The S3 driver implementation interface
   */
  export interface NFTStorageDriverContract {
    name: 'nftstorage'
    adapter: NFTStorage
    put(filePath: string, fileType: string, name: string, description: string): Promise<any>
  }

  interface DriversList {
    nftstorage: {
      implementation: NFTStorageDriverContract
      config: NFTStorageDriverConfig
    }
  }
}
