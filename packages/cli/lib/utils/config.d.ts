import Conf from 'conf';
interface Schema {
  host: string;
  port: number;
}
export declare class Config {
  static schema(): {
    host: {
      type: string;
      format: string;
      default: string;
    };
    port: {
      type: string;
      minimum: number;
      maximum: number;
      default: number;
    };
  };
  static options(): Conf.Options<Schema>;
  static log(...args: any[]): void;
  static getConfig(): Conf<Schema>;
  static current(): Schema;
  static set<K extends keyof Schema, T extends Schema[K]>(
    key: K,
    value: T,
  ): void;
  static get<K extends keyof Schema>(key: K): Schema[K];
  config: Conf<Schema>;
  constructor();
  set<K extends keyof Schema, T extends Schema[K]>(key: K, value: T): void;
  get<K extends keyof Schema>(key: K): Schema[K];
  current(): Schema;
}
export {};
