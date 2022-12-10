import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drive from '@ioc:Adonis/Core/Drive'
import Application from '@ioc:Adonis/Core/Application'

export default class FilesController {
  public async index({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const file = request.file('file')
    const { name, description } = request.body()
    if (file && name && description) {
      const path = Application.tmpPath('uploads')
      await file.move(path)
      const filePath = `${path}/${file.fileName}`
      const nftstorage = Drive.use('nftstorage')
      const metadata = await nftstorage.put(
        String(filePath),
        file.headers['content-type'],
        name,
        description
      )
      return metadata
    } else {
      response.send(400)
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
