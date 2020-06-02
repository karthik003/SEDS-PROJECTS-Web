import React, { Component } from "react";
import Sketch from "react-p5";
var stars = [];
var i=0;
// star class //
class Star {
	constructor(p5,width,height,TAU) {
        this.x = Math.random(width);
		this.y = Math.random(height);
		this.size = Math.random(0.25, 3);
		this.t = Math.random(TAU);
        this.draw = () => {
            this.t += 0.1;
		    var scale = this.size + Math.sin(this.t) * 2;
            p5.noStroke();
            p5.ellipse(this.x, this.y, scale, scale);
        };
        
    }
	
	
}

class Stars extends Component {

 
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(500,500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    for ( i = 0; i < 1000; i++) {
        stars[i] = new Star(p5);
        console.log('The star no. is ',stars.length)
	}
};
  draw = p5 => {
   p5.background(30);
    for (i = 0; i < stars.length; i++) {
		stars[i].draw(p5);
	}
  };
 
  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
export default Stars