var triangle = function(side1, side2, side3) {
  if (side1+side2<side3 || side2+side3<side1 || side3+side1<side2) {
    return "not a triangle"
  }

  if (side1 === side2 && side2 === side3) {
    return "equilateralTriangle"
  }

  if (side1 === side2 || side2 === side3 || side3 === side1) {
    return "isocelesTriangle"
  }

  if (side1 !== side2 && side2 !== side3) {
    return "scaleneTriangle"
  }
}
