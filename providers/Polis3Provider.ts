import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Web3 from 'web3'
import { newKitFromWeb3, ContractKit } from '@celo/contractkit'
import Env from '@ioc:Adonis/Core/Env'

export default class Polis3Provider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    const web3 = new Web3(`${Env.get('CHAIN_HOST')}:${Env.get('CHAIN_PORT')}`)
    const kit: ContractKit = newKitFromWeb3(web3)
    this.app.container.singleton('Polis3', () => kit)
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // I have nothing to do!
  }
}
