/*
 * @adonisjs/gcs
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { CannotWriteFileException } from '@adonisjs/core/build/standalone'

import { NFTStorageDriverConfig, NFTStorageDriverContract } from '@ioc:Adonis/Core/Drive'

import fs from 'fs'
import path from 'path'

import { NFTStorage, File } from 'nft.storage'

export class NFTStorageDriver implements NFTStorageDriverContract {
  /**
   * Reference to the gcs storage instance
   */
  public adapter: NFTStorage

  /**
   * Name of the driver
   */
  public name: 'nftstorage' = 'nftstorage'

  constructor(private config: NFTStorageDriverConfig) {
    this.adapter = new NFTStorage(this.config)
  }

  /**
   * Write string|buffer contents to a destination. The missing
   * intermediate directories will be created (if required).
   */
  public async put(
    filePath: string,
    fileType: string,
    name: string,
    description: string
  ): Promise<any> {
    try {
      const content = await fs.promises.readFile(filePath)
      const file = new File([content], path.basename(filePath), { type: fileType })
      const store = await this.adapter.store({
        name: name,
        description: description,
        image: file,
      })
      return store
    } catch (error) {
      throw CannotWriteFileException.invoke(name, error)
    }
  }
}
