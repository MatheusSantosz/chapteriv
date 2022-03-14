/// <reference types="cypress" />

describe('Listagem', () => {
  it('quando nao houver cadastros, entao a listagem deve estar vazia', () => {
    cy.fixture('listagem-vazia').then(data => {
      window.localStorage.setItem('data', JSON.stringify(data))

    })
    cy.visit('https://form-agilizei.netlify.app/listagem.html');
    //deve conter o tamanho 
    cy.get('table tbody tr').should('have.length', '0')
  });

  it('quando houvber um ou mais cadastro, entao a listagem deve exibir cada registro', () => {
    
    cy.fixture('listagem-com-itens').then(data => {
      window.localStorage.setItem('data', JSON.stringify(data))

    })
    cy.visit('https://form-agilizei.netlify.app/listagem.html');
        //deve conter o tamanho 

    cy.get('table tbody tr').should('have.length', '2')
  });


});