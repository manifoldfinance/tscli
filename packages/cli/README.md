tscli
=====

JSONRPC utility

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tscli.svg)](https://npmjs.org/package/tscli)
[![Downloads/week](https://img.shields.io/npm/dw/tscli.svg)](https://npmjs.org/package/tscli)
[![License](https://img.shields.io/npm/l/tscli.svg)](https://github.com/manifoldfinance/tscli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tscli
$ tscli COMMAND
running command...
$ tscli (-v|--version|version)
tscli/0.0.0 linux-x64 node-v12.16.1
$ tscli --help [COMMAND]
USAGE
  $ tscli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tscli autocomplete [SHELL]`](#tscli-autocomplete-shell)
* [`tscli eth:send-raw-transaction [FILE]`](#tscli-ethsend-raw-transaction-file)
* [`tscli eth:send-transaction [FILE]`](#tscli-ethsend-transaction-file)
* [`tscli help [COMMAND]`](#tscli-help-command)
* [`tscli plugins`](#tscli-plugins)
* [`tscli plugins:install PLUGIN...`](#tscli-pluginsinstall-plugin)
* [`tscli plugins:link PLUGIN`](#tscli-pluginslink-plugin)
* [`tscli plugins:uninstall PLUGIN...`](#tscli-pluginsuninstall-plugin)
* [`tscli plugins:update`](#tscli-pluginsupdate)
* [`tscli repl [PROVIDER]`](#tscli-repl-provider)

## `tscli autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ tscli autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ tscli autocomplete
  $ tscli autocomplete bash
  $ tscli autocomplete zsh
  $ tscli autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.5/src/commands/autocomplete/index.ts)_

## `tscli eth:send-raw-transaction [FILE]`

describe the command here

```
USAGE
  $ tscli eth:send-raw-transaction [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/eth/send-raw-transaction.ts](https://github.com/manifoldfinance/tscli/blob/v0.0.0/src/commands/eth/send-raw-transaction.ts)_

## `tscli eth:send-transaction [FILE]`

describe the command here

```
USAGE
  $ tscli eth:send-transaction [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  (required) name to print
```

_See code: [src/commands/eth/send-transaction.ts](https://github.com/manifoldfinance/tscli/blob/v0.0.0/src/commands/eth/send-transaction.ts)_

## `tscli help [COMMAND]`

display help for tscli

```
USAGE
  $ tscli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `tscli plugins`

list installed plugins

```
USAGE
  $ tscli plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ tscli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/index.ts)_

## `tscli plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ tscli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ tscli plugins:add

EXAMPLES
  $ tscli plugins:install myplugin 
  $ tscli plugins:install https://github.com/someuser/someplugin
  $ tscli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/install.ts)_

## `tscli plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ tscli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ tscli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/link.ts)_

## `tscli plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ tscli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ tscli plugins:unlink
  $ tscli plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/uninstall.ts)_

## `tscli plugins:update`

update installed plugins

```
USAGE
  $ tscli plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.9/src/commands/plugins/update.ts)_

## `tscli repl [PROVIDER]`

Interactive REPL

```
USAGE
  $ tscli repl [PROVIDER]

ARGUMENTS
  PROVIDER  Provider address.  Ex: http://localhost:8545

OPTIONS
  -h, --help               show CLI help
  -p, --provider=provider  Provider address.  Ex: http://localhost:8545
```

_See code: [src/commands/repl.ts](https://github.com/manifoldfinance/tscli/blob/v0.0.0/src/commands/repl.ts)_
<!-- commandsstop -->
