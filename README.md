# Paylocity Technical Exercise

Uses vanilla express.js to cover the use cases.

## Installation

Requires npm, tested using npm 10.1.0 and node 20.6.1.

`npm install`

## Running Dev Server

`npm run dev`

## Creating Records

Uses the following command structure:

```console
node scripts/cli.js create <dto object array>
```

Example:

```console
node scripts/cli.js create '[{"name":"Elevation of Privilege","type":"Platform","description":"SecurityFeature Bypass","date":"2022-01-02"}]'
```

Persisting a bunch of records from a file:

```console
node scripts/cli.js create "$(< testdata/examples.json)"
```

## Listing Records

Uses the following command structure:

```console
node scripts/cli.js list
```

Example output:

```console
┌─────────┬──────────────────────────┬────────────┬──────────────────────────┬──────────────┐
│ (index) │           name           │    type    │       description        │     date     │
├─────────┼──────────────────────────┼────────────┼──────────────────────────┼──────────────┤
│    0    │ 'Elevation of Privilege' │ 'Platform' │ 'SecurityFeature Bypass' │ '2022-01-10' │
│    1    │ 'Elevation of Privilege' │ 'Platform' │ 'SecurityFeature Bypass' │ '2022-01-09' │
│    2    │ 'Elevation of Privilege' │ 'Platform' │ 'SecurityFeature Bypass' │ '2022-01-08' │
│    3    │ 'Elevation of Privilege' │ 'Platform' │ 'SecurityFeature Bypass' │ '2022-01-07' │
│    4    │ 'Elevation of Privilege' │ 'Platform' │ 'SecurityFeature Bypass' │ '2022-01-06' │
│    5    │ 'Elevation of Privilege' │ 'Platform' │ 'SecurityFeature Bypass' │ '2022-01-05' │
│    6    │ 'Elevation of Privilege' │ 'Platform' │ 'SecurityFeature Bypass' │ '2022-01-04' │
│    7    │ 'Elevation of Privilege' │ 'Platform' │ 'SecurityFeature Bypass' │ '2022-01-03' │
│    8    │ 'Elevation of Privilege' │ 'Platform' │ 'SecurityFeature Bypass' │ '2022-01-02' │
│    9    │ 'Elevation of Privilege' │ 'Platform' │ 'SecurityFeature Bypass' │ '2022-01-01' │
└─────────┴──────────────────────────┴────────────┴──────────────────────────┴──────────────┘
```
