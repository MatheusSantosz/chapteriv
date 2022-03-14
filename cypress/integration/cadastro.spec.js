/// <reference types="cypress" />
///adicionados dados dinamicos
//igual o faker e causal

var Chance = require('chance');
var Chance = new Chance ();

describe('Cadastro', () => {
  it('Quando eu informar os dados e finalizar, o cadastro deve ser efetuado', () => {
      cy.visit('https://form-agilizei.netlify.app/')
      //inputs de texto / textarea /email -> type
      //input[name=value]
      cy.get('input[name=firstName]').type(chance.first());
      cy.get('input[name=lastName]').type(chance.last());
      cy.get('textarea[name=adress]').type(chance.address());
      cy.get('input[name=emailAdress]').type(chance.email());
      cy.get('input[value=n]').check();
      //inputs radio/checkboxes-> check
      cy.get('input[type=checkbox]').check('Netflix');
      cy.get('input[type=checkbox]').check('Dormir');
    
    //inputs do tipo combobx / select -> 
    cy.get('select#countries').select('Dinamarca',{force:true})
    cy.get('select#years').select('2006',{force:true})
    cy.get('select#months').select('Janeiro',{force:true})
    cy.get('select#days').select('12',{force:true})

    //inputs de senha com o id input#secondpassword/firstpassoword
    cy.get('input#firstpassword').type('Alunos@2022')
    cy.get('input#secondpassword').type('Alunos@2022')
    // utilizando o playground
    cy.contains('Finalizar cadastro').click();
    //should contain
    cy.url('').should('contain', 'listagem')
    //deveria excutar uma execucao
    



  });
});