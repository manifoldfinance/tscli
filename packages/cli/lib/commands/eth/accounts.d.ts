import { Command } from '@oclif/command';
export default class Accounts extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
    };
    static aliases: string[];
    run(): Promise<void>;
}
