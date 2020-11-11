import {Command, flags} from '@oclif/command'
export default class Repl extends Command {
  static description: string
  static flags: {
    help: import('@oclif/parser/lib/flags').IBooleanFlag<void>
    provider: flags.IOptionFlag<string | undefined>
  }
  static args: {
    name: string
    description: string
  }[]
  private finish
  run(): Promise<void>
}
