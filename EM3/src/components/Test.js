import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Svg, G, Line, Rect, Path, Polyline} from 'react-native-svg';
import * as d3 from 'd3';

export default class Test extends Component {
  render() {
    const width = 500,
      height = 500,
      start = 0,
      end = 2.25,
      numSpirals = 4;

    const theta = function(r) {
      return numSpirals * Math.PI * r;
    };

    const r = d3.min([width, height]) / 2 - 40;

    var radius = d3
      .scaleLinear()
      .domain([start, end])
      .range([40, r]);

    // var svg = d3
    //   .select('#chart')
    //   .append('svg')
    //   .attr('width', width)
    //   .attr('height', height)
    //   .append('g')
    //   .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    // create the spiral, borrowed from http://bl.ocks.org/syntagmatic/3543186
    var points = d3.range(start, end + 0.001, (end - start) / 1000);

    var spiral = d3
      .radialLine()
      .curve(d3.curveCardinal)
      .angle(theta)
      .radius(radius);

    // var path = svg
    //   .append('path')
    //   .datum(points)
    //   .attr('id', 'spiral')
    //   .attr('d', spiral)
    //   .style('fill', 'none')
    //   .style('stroke', 'steelblue');

    // // fudge some data, 2 years of data starting today
    // var spiralLength = path.node().getTotalLength(),
    //   N = 730,
    //   barWidth = spiralLength / N - 1;
    // var someData = [];
    // for (var i = 0; i < N; i++) {
    //   var currentDate = new Date();
    //   currentDate.setDate(currentDate.getDate() + i);
    //   someData.push({
    //     date: currentDate,
    //     value: Math.random(),
    //   });
    // }

    // // here's our time scale that'll run along the spiral
    // var timeScale = d3
    //   .scaleTime()
    //   .domain(
    //     d3.extent(someData, function(d) {
    //       return d.date;
    //     }),
    //   )
    //   .range([0, spiralLength]);

    // // yScale for the bar height
    // var yScale = d3
    //   .scaleLinear()
    //   .domain([
    //     0,
    //     d3.max(someData, function(d) {
    //       return d.value;
    //     }),
    //   ])
    //   .range([0, r / numSpirals - 30]);

    // // append our rects
    // svg
    //   .selectAll('rect')
    //   .data(someData)
    //   .enter()
    //   .append('rect')
    //   .attr('x', function(d, i) {
    //     // placement calculations
    //     var linePer = timeScale(d.date),
    //       posOnLine = path.node().getPointAtLength(linePer),
    //       angleOnLine = path.node().getPointAtLength(linePer - barWidth);

    //     d.linePer = linePer; // % distance are on the spiral
    //     d.x = posOnLine.x; // x postion on the spiral
    //     d.y = posOnLine.y; // y position on the spiral

    //     d.a = (Math.atan2(angleOnLine.y, angleOnLine.x) * 180) / Math.PI - 90; //angle at the spiral position

    //     return d.x;
    //   })
    //   .attr('y', function(d) {
    //     return d.y;
    //   })
    //   .attr('width', function(d) {
    //     return barWidth;
    //   })
    //   .attr('height', function(d) {
    //     return yScale(d.value);
    //   })
    //   .style('fill', 'steelblue')
    //   .style('stroke', 'none')
    //   .attr('transform', function(d) {
    //     return 'rotate(' + d.a + ',' + d.x + ',' + d.y + ')'; // rotate the bar
    //   });

    // // add date labels
    // var tF = d3.timeFormat('%b %Y'),
    //   firstInMonth = {};
    // svg
    //   .selectAll('text')
    //   .data(someData)
    //   .enter()
    //   .append('text')
    //   .attr('dy', 10)
    //   .style('text-anchor', 'start')
    //   .style('font', '10px arial')
    //   .append('textPath')
    //   // only add for the first of each month
    //   .filter(function(d) {
    //     var sd = tF(d.date);
    //     if (!firstInMonth[sd]) {
    //       firstInMonth[sd] = 1;
    //       return true;
    //     }
    //     return false;
    //   })
    //   .text(function(d) {
    //     return tF(d.date);
    //   })
    //   // place text along spiral
    //   .attr('xlink:href', '#spiral')
    //   .style('fill', 'grey')
    //   .attr('startOffset', function(d) {
    //     return (d.linePer / spiralLength) * 100 + '%';
    //   });
    {
      console.log(points);
    }
    return (
      <Svg width={300} height={300}>
        {/* <Line d={spiral} fill="none" stroke="black" /> */}
        <Polyline points={"10,10 20,12 30,20 40,60 60,70 95,90"} fill="none" stroke="black" strokeWidth="3" />
      </Svg>
    );
  }
}

const styles = StyleSheet.create({
  axis: {
    display: 'none',
  },

  bar: {
    backgroundColor: 'orange',
  },

  d3_tip: {
    // line-height: 1,
    // font-weight: 'bold',
    padding: '12',
    backgroundColor: 'orange',
    color: '#fff',
    borderRadius: 2,
  },
});
