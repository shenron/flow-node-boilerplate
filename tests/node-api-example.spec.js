// @flow

import type { Main } from '../src/node-api-example';

const main: Main = require('../src/node-api-example');

describe('WHEN exec "node-api-example"', () => {
  let res;
  beforeAll(async (done) => {
    res = await main();
    return done();
  });

  it('THEN we should have a result', () => {
    expect(res !== '' && !!res).toBe(true);
  });
});

