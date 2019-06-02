/* eslint-disable no-undef */
const expect = require('chai').expect;

const { CreateOneValidator } = require('../../validations');

// TODO: should be implemented
describe('Unit User/ CreateOne', () => {
  /**
   *
   * * Unit
   *
   * @ name
   * it should return {error: "This field is required"} if no name is passed
   * it should return {error: 'name_must_be_between 2 ~ 200'} if passing name less than 2
   * it should return {error: 'name_must_be_between 2 ~ 200'} if passing name more than 200
   *
   */

  const req = { body: null };

  beforeEach(() => {
    req.body = {
      name: 'what an user'
    };
  });

  it('should return {error: "This field is required"} if no name is passed', () => {
    req.body.name = '';
    const { error } = CreateOneValidator(req);
    expect(error.name).to.not.be.undefined;
    expect(error.name[0]).to.equal('name is required');
  });

  it("should return {error: 'name_must_be_between 2 ~ 200'} if passing name ar less than 2", () => {
    req.body.name = 'd';
    const { error } = CreateOneValidator(req);
    expect(error.name).to.not.be.undefined;
    expect(error.name[0]).to.equal('name must be at least 2 characters');
  });

  it("should return {error: 'name_must_be_between 2 ~ 200'} if passing name ar more than 200", () => {
    req.body.name = 'd'.repeat(201);
    const { error } = CreateOneValidator(req);
    expect(error.name).to.not.be.undefined;
    expect(error.name[0]).to.equal('name must be at max 200 characters');
  });
});
