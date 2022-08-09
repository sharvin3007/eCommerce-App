import React from 'react'
import { mount } from '@cypress/react'
import Product from './Product'

const data = {
  index: 0,
  isSale: true,
  isExclusive: true,
  price: '$18.88',
  productImage: './Images/product-1.jpg',
  productName: 'Striped shirt',
  size: ['XS', 'S', 'L', 'XL']
}

const partialData = {
  index: 0,
  isSale: false,
  isExclusive: false,
  price: null,
  productImage: 'product-1.jpg',
  productName: 'Striped shirt',
  size: ['XS', 'S', 'L', 'XL']
}

it('Renders correct product data', () => {
  mount(<Product dataPacket={data} />)
  cy.get('.exclusive').contains('Exclusive').should('be.visible')
  cy.get('.sale').contains('Sale').should('be.visible')
  cy.get('.product-title').contains('Striped shirt').should('be.visible')
  cy.get('.product-price').contains('$18.88').should('be.visible')
})

it('Renders partial product data', () => {
  mount(<Product dataPacket={partialData} />)
  cy.get('.exclusive').should('not.exist')
  cy.get('.sale').should('not.exist')
  cy.get('.product-title').contains('Striped shirt').should('be.visible')
  cy.get('.product-price').should('not.be.visible')
})
