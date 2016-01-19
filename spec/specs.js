describe("triangle", function (){
  it("is not a triangle if the sum of two sides are <= the third side", function(){
    expect(triangle(4,4,10).to.equal("not a triangle"));
  });

  it("is a triangle if all sides are equal", function(){
    expect(triangle(13,13,13).to.equal("equilateral triangle"));
  });

});
