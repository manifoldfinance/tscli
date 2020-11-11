import {Command, flags} from '@oclif/command'
export default class SendTransaction extends Command {
  static description: string
  static flags: {
    help: import('@oclif/parser/lib/flags').IBooleanFlag<void>
    name: flags.IOptionFlag<string>
    force: import('@oclif/parser/lib/flags').IBooleanFlag<boolean>
  }
  static args: {
    name: string
  }[]
  run(): Promise<void>
}
