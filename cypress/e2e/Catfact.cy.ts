import * as testData from "../fixtures/catfact.json";

describe(`Catfact`, () => {
  before(() => {
    cy.on('uncaught:exception', (err, runnable) => { return false; });
    cy.visit(testData.baseUrl);
  })
  it(`TC05: Cat fact API check`, () => {
    cy.request(testData.routes.randomFact).then((response) => {
      expect(response.status).equal(200);
      Object.entries(testData.factResponseSchema).forEach(([propertyName, propertyType]) => {
        expect(response.body).property(propertyName).and.be.a(propertyType);
      })
      // expect(response.body).property('fact').and.be.a('string');
      // expect(response.body).property('length').and.be.a('number');
      cy.log(response.body.fact);
      expect(response.body.fact).to.not.be.empty;
      cy.log(response.body.length);
      expect(response.body.length).to.not.be.null;
    });
  })
})