var triangle = function(side1, side2, side3) {
  if (side1+side2<side3 || side2+side3<side1 || side3+side1<side2) {
    return ("notAtriangle")
  } else if (side1 === side2 && side2 === side3) {
    return ("equilateralTriangle")
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    return ("isocelesTriangle")
  } else {
    return ("scaleneTriangle")
  }
}

$(document).ready(function() {
  $("form#user-shape").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val()); 
    var result = triangle(side1, side2, side3);

      if (result === "notAtriangle") {
        $(".triangle").text("not a triangle!");
      } else if (result==="equilateralTriangle") {
        $(".triangle").text("an equilateral triangle");
      } else if (result==="isocelesTriangle") {
        $(".triangle").text("an isoceles triangle");
      } else if (result ==="scaleneTriangle"){
        $(".triangle").text("a scalene triangle")
      }
    event.preventDefault();
  });
});
