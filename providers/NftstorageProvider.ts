import { NFTStorageDriver } from '../Drivers/Nftstorage'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class NFTStorageProvider {
  constructor(protected app: ApplicationContract) {}

  public boot() {
    this.app.container.withBindings(['Adonis/Core/Drive'], (Drive) => {
      Drive.extend('nftstorage', (_, __, config) => {
        return new NFTStorageDriver(config)
      })
    })
  }
}
