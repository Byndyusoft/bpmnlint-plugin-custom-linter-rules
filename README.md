# bpmnlint-plugin-custom-linter-rules

[![npm@latest](https://img.shields.io/npm/v/@byndyusoft/bpmnlint-plugin-custom-linter-rules/latest.svg)](https://www.npmjs.com/package/@byndyusoftbpmnlint-plugin-custom-linter-rules)
[![test](https://github.com/Byndyusoft/bpmnlint-plugin-custom-linter-rules/actions/workflows/test.yaml/badge.svg?branch=master)](https://github.com/Byndyusoft/bpmnlint-plugin-custom-linter-rules/actions/workflows/test.yaml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Custom rules for [bpmnlint](https://github.com/bpmn-io/bpmnlint)

## Requirements

- Node.js v18 LTS or later
- Yarn

## Install

```bash
yarn add -D @byndyusoft/bpmnlint-plugin-custom-linter-rules
```

```bash
npm i -D @byndyusoft/bpmnlint-plugin-custom-linter-rules
```

## Usage

Activate the rules via the local `.bpmnlintrc` file. For customize use rules
block. For additional
see [For additional see](https://github.com/bpmn-io/bpmnlint?tab=readme-ov-file#configuration)

```json
{
  "extends": [
    "bpmnlint:recommended",
    "plugin:@byndyusoft/bpmnlint-plugin-custom-linter-rules/recommended"
  ]
}
```

## Rules

See [documentation](./docs/rules/Readme.md). [The rules folders](./rules)
contains each rules implementation.

## Maintainers

- [@Byndyusoft/owners](https://github.com/orgs/Byndyusoft/teams/owners) <<github.maintain@byndyusoft.com>>
- [@Byndyusoft/team](https://github.com/orgs/Byndyusoft/teams/team)

## License

This repository is released under version 2.0 of the
[Apache License](https://www.apache.org/licenses/LICENSE-2.0).
