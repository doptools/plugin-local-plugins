myplug
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/myplug.svg)](https://npmjs.org/package/myplug)
[![Downloads/week](https://img.shields.io/npm/dw/myplug.svg)](https://npmjs.org/package/myplug)
[![License](https://img.shields.io/npm/l/myplug.svg)](https://github.com/myrddraall/myplug/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @doptools/plugin-version
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@doptools/plugin-version/1.0.0 linux-x64 node-v14.15.5
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example version:bump PART`](#oclif-example-versionbump-part)
* [`oclif-example version:get`](#oclif-example-versionget)
* [`oclif-example version:new [FILE]`](#oclif-example-versionnew-file)
* [`oclif-example version:set [VERSION]`](#oclif-example-versionset-version)

## `oclif-example version:bump PART`

describe the command here

```
USAGE
  $ oclif-example version:bump PART

ARGUMENTS
  PART  (major|minor|patch|prerelease) which part of the semver to bump

OPTIONS
  --dryRun
```

_See code: [src/commands/version/bump.ts](https://github.com/myrddraall/myplug/blob/v1.0.0/src/commands/version/bump.ts)_

## `oclif-example version:get`

```
USAGE
  $ oclif-example version:get
```

_See code: [src/commands/version/get.ts](https://github.com/myrddraall/myplug/blob/v1.0.0/src/commands/version/get.ts)_

## `oclif-example version:new [FILE]`

describe the command here

```
USAGE
  $ oclif-example version:new [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/version/new.ts](https://github.com/myrddraall/myplug/blob/v1.0.0/src/commands/version/new.ts)_

## `oclif-example version:set [VERSION]`

Sets the version of a project

```
USAGE
  $ oclif-example version:set [VERSION]
```

_See code: [src/commands/version/set.ts](https://github.com/myrddraall/myplug/blob/v1.0.0/src/commands/version/set.ts)_
<!-- commandsstop -->
