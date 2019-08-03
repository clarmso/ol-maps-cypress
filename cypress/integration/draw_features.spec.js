/// <reference types="Cypress" />

context('Draw Features', () => {
  beforeEach(() => {
    cy.visit('https://openlayers.org/en/latest/examples/draw-and-modify-features.html')
  })

  it("point", () => {
    cy.get('select#type').select('Point')
    cy.get('canvas').scrollIntoView()
    cy.wrap([
      {'x': 50, 'y': 100},
      {'x': 730, 'y': 80},
      {'x': 352, 'y': 300},
      {'x': 523, 'y': 140},
      {'x': 582, 'y': 240},
    ]).each(point => {
      cy.get('canvas')
        .trigger('pointerdown', point["x"], point["y"])
        .trigger('pointerup', point["x"], point["y"])
    })
  })

  it("polygon", () => {
    cy.get('select#type').select('Polygon')
    cy.get('canvas').scrollIntoView()
    cy.wrap([
      {'x': 100, 'y': 100},
      {'x': 300, 'y': 100},
      {'x': 300, 'y': 200},
      {'x': 100, 'y': 300},
      {'x': 100, 'y': 100},
    ]).each(point => {
      cy.get('canvas')
        .trigger('pointerdown', point["x"], point["y"])
        .trigger('pointerup', point["x"], point["y"])
    })
  })
})  