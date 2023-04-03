/// <reference types="cypress" />

describe('The db reset', () => {

  // beforeEach(() => {
  //   cy.exec('npm run db:reset && npm run:seed')
  // })

  it('creates a new list with a card in it',
  () => {
   

    cy.visit('/')

    cy.get('[data-cy="first-board"]').type('First board{enter}')

    cy.visit('/board/1')
   
    // cy.get('[data-cy="add-list-input"]').type('new list{enter}')

    // cy.get('[data-cy="new-card"]')

  });

  it('bookmarks a board', () => {

    cy.visit('/')

  })
})
