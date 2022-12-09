import { BaseCommand } from '@adonisjs/core/build/standalone'
import Polis3 from '@ioc:Polis3'

export default class HelloWorldChain extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'chain:hello_world'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Testa sua rede local...'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    const polis3 = Polis3
    let accounts = await polis3.web3.eth.getAccounts()
    let balance = await polis3.getTotalBalance(accounts[0])
    this.logger.info('Contas')
    this.logger.debug(String(accounts))
    this.logger.info(`Saldo da primeira conta (${accounts[0]})`)
    this.logger.debug(`CELO: ${balance.CELO?.toString(10)}`)
    this.logger.debug(`cEUR: ${balance.cEUR?.toString(10)}`)
    this.logger.debug(`cREAL: ${balance.cREAL?.toString(10)}`)
    this.logger.debug(`cUSD: ${balance.cUSD?.toString(10)}`)
  }
}
