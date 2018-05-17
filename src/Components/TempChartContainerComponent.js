import React, { Component } from 'react';
import * as d3 from 'd3';
import './Chart.css';
import {connect} from 'react-redux';


 const draw = (chartdata) => {
        // console.log('draw function ' + chartdata.currentUser.plantData[0]);
        let data = chartdata
        // .currentUser.plantData;
        // console.log('data in draw' + JSON.stringify(data));
        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 400 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        var parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S.%fZ");

        // set the ranges
        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);

        // define the line
        var valueline = d3.line()
            .x(function(d) { return x(d.created); })
            .y(function(d) { return y(d.temp); });

        // appends the svg obgect to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        let newWidth = width + margin.left + margin.right;
        let newHeight = height + margin.top + margin.bottom;
        var svg = d3.select("svg")
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr('viewBox', '0 0 newWidth newHeight')
            .attr("width", newWidth)
            .attr("height", newHeight)
        .append("g")
            .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");


        // format the data
        data.forEach(function(d) {
            d.created = parseTime(d.created);
            d.temp = +d.temp;
            console.log('temps ' + d.temp + ' :times ' + d.created);
        });

        // sort time ascending
        data.sort(function(a, b){
            return a["created"]-b["created"];
        })

        // Scale the range of the data
        x.domain(d3.extent(data, function(d) { return d.created; }));
        y.domain([0, d3.max(data, function(d) {
            return Math.max(d.temp); })]);

        // Add the valueline path.
        svg.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", valueline);
        // Add the X Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(5));

        // Add text label for the x axis
        svg.append('text')
            .attr('transform',
                  'translate(' + (width / 2) + ' ,' +
                                 (height + margin.top + 10) + ')')
            //.attr('dx', '3em')
            .style('text-anchor', 'middle')
            .text('Time');

        // Add the Y Axis
        svg.append("g")
            .call(d3.axisLeft(y));

        // text label for y axis
        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 0 - margin.left)
            .attr('x', 0 - (height / 2))
            .attr('dy', '1em')
            .style('text-anchor', 'middle')
            .text('Temperature °C');
    }

let fetchData = () => {
    return fetch('https://radiant-anchorage-62389.herokuapp.com/graphql', {
        headers: {
        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImlhdCI6MTUyNTk1NjMwNiwiZXhwIjoxNTI2NTYxMTA2fQ.2vFISgpV0d8AJ9H-ZHDyqqL08wkE5dvV4Nl6KINvJa4",
        },
        method: 'POST',
        body: `
        query {
            currentUser {
                user {
                    username
                    avatar
                }
                plantData {
                    temp
                    sun
                    moist
                    humidity
                    created
                }
            }
        }`
    })
    .then( res => res.json() )
    .then( data => {
        console.log('inside fetch data ' + data);
        return data;
    });
}


class TempChartContainerComponent extends Component {

    componentDidMount() {
        draw(this.props.plantData);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // draw chart with D3
    //     if (prevState !== this.state) {
    //         draw(this.state.temperatureData.data);
    //     }
    // }

    render() {
        return (
            <div className="ChartContainer">
                <svg></svg>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {plantData: state.plantData}
  };

export default connect(mapStateToProps)(TempChartContainerComponent);
