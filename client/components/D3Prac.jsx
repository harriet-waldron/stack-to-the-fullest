import React from 'react'
import rd3 from 'react-d3-library';
import * as d3 from 'd3';
// import node from 'd3file';
const RD3Component = rd3.Component;

// export default function D3Prac() {

  
class D3Prac extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.dataset = [1, 2, 5, 10, 20, 30, 40, 50, 40, 30, 20, 10, 5, 2, 1];
  }

  componentDidMount() {
    let xaxis = 800;
    let yaxis = 100;
    let svg = d3.select(this.myRef.current)
                .append('svg')
                .attr('width', xaxis)
                .attr('height', yaxis);

    let rect_width = 45;
    svg.selectAll('rect')
        .data(this.dataset)
        .enter()
        .append('rect')
        .attr('x', (d, i) => 2 + i*(rect_width + 2))
        .attr('y', d => yaxis - d)
        .attr('width', rect_width)
        .attr('height', d => d)
        .attr('fill', 'teal');
  }

  render(){
    return (
      <div ref={this.myRef}>

      </div>
    )
  }
}

export default D3Prac
  
// }























// var node = document.createElement('div');

// var diameter = 960,
//   format = d3.format(",d"),
//   color = d3.scale.category20c();

// var bubble = d3.layout.pack()
//   .sort(null)
//   .size([diameter, diameter])
//   .padding(1.5);
  
// var svg = d3.select(node).append("svg")
//   .attr("width", diameter)
//   .attr("height", diameter)
//   .attr("class", "bubble");

//   // try simpler data
// const data = {"name":"Mercury",
// "map":"mercurymap.jpg",
// "trajectory":true,
// "H":-0.665,
// "elements":[{"a":0.38709927,"e":0.20563593,"i":7.00497902,"L":252.2503235,"W":77.45779628,"N":48.33076593,"da":3.7e-7,"de":0.00001906,"di":-0.00594749,"dL":149472.67411175,"dW":0.16047689,"dN":-0.12534081,"ep":"2000-01-01"}],
// "id":"mer",
// "desig":"Mer",
// "en":"Mercury",
// "sym":"☿"}

// data.width = 500;
// data.height = 750;

// data.dataset = [
//   {xValue : 1, yValue: data.elements[0].a},
//   {xValue : 2, yValue: data.elements[0].e}, 
//   {xValue : 3, yValue: data.elements[0].i}, 
//   {xValue : 4, yValue: data.elements[0].L}, 
//   {xValue : 5, yValue: data.elements[0].W},
//   {xValue : 6, yValue: data.elements[0].N},
//   {xValue : 7, yValue: data.elements[0].da},
//   {xValue : 8, yValue: data.elements[0].de}
// ]

// data.x_display_name = 'X VALUE';
// data.y_display_name = 'Y VALUE';

// data.area_class = 'area';
// data.axisLine_class = 'axisLine';

// data.fill = ['lemonChiffon', 'aliceblue', 'sandybrown', 'darksalmon']

// data.ticks = 10;

// var bubbles = svg.selectAll('.node')
//   .data(bubble.nodes(data.dataset))
//   .enter().append('g')
//   .attr('class', 'node')
//   .attr("transform", function(d) {return "translate(" + 10 + "," + 10 + ")"});
  
//   // .filter(function(d) { return !d.children }))
// class My_d3 extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {d3: ''}
//   }

//   componentDidMount() {
//     this.setState({d3: node});
//   }

//   render() {
//     return (
//       <div>
//         <RD3Component data={this.state.d3} />
//       </div>
//     )
//   }
// }
// // let a = new my_First_React_D3_Library_Component

// return (
//   <>
//   <h1>.</h1>
//   <My_d3 />
//   </>
// )