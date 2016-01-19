describe("triangle", function (){
  it("is not a triangle if the sum of the lengths of any two sides is <= the third side", function(){
    expect(triangle(4,4,10).to.equal("not a triangle"))
  });

});
