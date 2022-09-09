# Commands list on terminal and

> Initializing the project

```terminal
npm init -y
```

> Installing prettier to development dependencies

```terminal
npm install --save-dev --save-exact prettier
```

> Installing eslint to development dependencies

```terminal
npm i eslint -D
```

> Initializing the eslint

```terminal
npm init @eslint/config
```

> Answers the quiz:

> ? Need to install the following packages: @eslint/create-config@0.3.1 Ok to proceed? (y) y

> -> y

> ? How would you like to use ESLint?

> -> To check syntax, find problems, and enforce code style

> ? What type of modules does your project use?

> -> JavaScript modules (import/export)

> ? Which framework does your project use?

> -> none

> ? Does your project use TypeScript?

> -> Yes

> ? Where does your code run?

> -> Node

> ? Use a popular style guide

> -> Standard: https://github.com/standard/
> eslint-config-standard-with-typescript

> ? What format do you want your config file to be in?

> -> JSON

> Checking peerDependencies of
> eslint-config-standard-with-typescript@latest

> The config that you've selected requires the following dependencies:
>
> eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.0.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@\*
> ? Would you like to install them now?

> -> Yes

> ? Which package manager do you want to use?

> -> Yarn

> It's need to make file config vite.config.ts with basic contents

```json
{
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": "standard-with-typescript",
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-useless-constructor": "off"
  }
}
```

> Initializing the vitest tool to making tests with UI interface web

```terminal
npm i vitest "@vitest/ui" -D
```

> It's need to make file config vite.config.ts with basic contents

```typescript
import { defineConfig } from "vitest/config"

export default defineConfig({
  base: "./src/",
  test: {
    globals: true /* auto global imported describe, test, expect */
  }
})
```

> Installing date-fns to development date dependencies

```terminal
npm i date-fns
```

break point: https://youtu.be/jBOLRzjEERk?t=2603
