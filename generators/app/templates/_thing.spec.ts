import * as mocha from 'mocha';
import * as chai from 'chai';
const expect = chai.expect;

import { <%= name%> } from './<%= name%>';

describe('<%= name%> tests', () => {
  let thing;
  beforeEach(() => {
    thing = new <%= name%>();
  })

  it('should do something', () => {
    expect(thing.add(3, 4)).to.equal(7);
  });

});