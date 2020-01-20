# ESlint-plugin-JSON5

A processor for JSON5 files to lint them with eslint rules as JavaScript object.

## Installation

Install ESLint either locally or globally. (Note that locally, per project, is strongly preferred)

```$ npm install eslint --save-dev```

If you installed ESLint globally, you have to install React plugin globally too. Otherwise, install it locally.

```$ npm install eslint-plugin-json5 --save-dev```

## Configuration

Add the plugin in your eslint configuration `eslintrc.json` or equivalent.

```json5
{
    // ...
    plugins: [
        // ...
        "json5",
    ],
}
```

The preprocessor is then directly used for json5 files.
You still have to add them to the linted file extensions when calling eslint.

```eslint . --ext json5```
