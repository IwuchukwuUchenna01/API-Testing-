///<reference types='cypress'/>

describe('get request testing', () => {
  it('passes', () => {
    cy.request('GET', 'https://fakestoreapi.com/products',{}).then((r)=>{
      expect(r.status).to.eq(200)
    })
  })
    it('post tetsing', ()=>{
      cy.request('POST', 'https://fakestoreapi.com/products',
      {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    })
      .then((r)=>{
        expect(r.status).to.eq(200)
      })
    })
})