import {Command, flags} from '@oclif/command'
export default class SendRawTransaction extends Command {
  static description: string
  static flags: {
    help: import('@oclif/parser/lib/flags').IBooleanFlag<void>
    name: flags.IOptionFlag<string | undefined>
    force: import('@oclif/parser/lib/flags').IBooleanFlag<boolean>
  }
  static args: {
    name: string
  }[]
  run(): Promise<void>
}
