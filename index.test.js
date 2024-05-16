const postcss = require('postcss')
const { equal } = require('node:assert')
const { test } = require('node:test')

const plugin = require('./')

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  equal(result.css, output)
  equal(result.warnings().length, 0)
}

/* Write tests here */

test('vh polyfill (svh, lvh, dvh)', async () => {
  await run(
    'a{ height: 50svh; }',
    'a{ height: 50vh; height: 50svh; }',
    {}
  )

  await run(
    'a{ height: 50lvh; }',
    'a{ height: 50vh; height: 50lvh; }',
    {}
  )

  await run(
    'a{ height: 50dvh; }',
    'a{ height: 50vh; height: 50dvh; }',
    {}
  )
});

test('vw polyfill (svw, lvw, dvw)', async () => {
  await run(
    'a{ width: 50svw; }',
    'a{ width: 50vw; width: 50svw; }',
    {}
  )

  await run(
    'a{ width: 50lvw; }',
    'a{ width: 50vw; width: 50lvw; }',
    {}
  )

  await run(
    'a{ width: 50dvw; }',
    'a{ width: 50vw; width: 50dvw; }',
    {}
  )
});
