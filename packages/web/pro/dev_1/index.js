import * as sculpture from "expand.json";

const jscad = require('@jscad/modeling')
const { translate, scale, rotateZ } = jscad.transforms
const { union } = jscad.booleans

// Load the STL files using require
//const sculpture = import "expand.json";

//const frog = require('./frog-OwenCollins.stl')

const main = () => {
  /*return union(
    translate([0, 0, 13], rotateZ(-Math.PI / 3, scale([0.25, 0.25, 0.25], frog))),
    translate([-5, 6, 0], sculpture)
  )*/
  return sculpture
}

module.exports = { main }