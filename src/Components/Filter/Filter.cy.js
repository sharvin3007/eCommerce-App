import React from 'react'
import { mount } from '@cypress/react'
import Filter from './Filter'

it('Filter product sizes', () => {
  const typeCallback = cy.stub().as('size')
  mount(<Filter typeCallback= {typeCallback} />)
  cy.get('.Dropdown-root').click().contains('.Dropdown-option', 'XL').click()
  // Check if filter passes the correct size when clicked
  cy.get('@size').should('have.been.calledWith', 'XL')
})
