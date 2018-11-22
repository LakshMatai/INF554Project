import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { selection } from 'd3';
@Component({
  selector: 'app-carrier-stats',
  templateUrl: './carrier-stats.component.html',
  styleUrls: ['./carrier-stats.component.css']
})
export class CarrierStatsComponent implements OnInit {
  init_text = "hover";
  card_text = "";
  airline_name = "";
  file_name = "";
  airline="";
  airl_name = "";
  image ="";
  info="";
  wiki="";
  headqu="";
  headquname="";
  AOC="";
  IATA="";
  ICAO="";
  website="";

  endeavor(){
    var _self = this;
    _self.file_name = "data/endevor_airline.json";
    _self.airline="Endeavor Air"; //same as in file pie_chart.csv
    _self.airl_name="Endeavor Airlines";
    _self.image="data:image/png;base64,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";
    _self.info="Endeavor Air is an American regional airline that operates as Delta Connection for Delta Air Lines. The airline was founded as Express Airlines I in 1985 and changed names to Pinnacle Airlines in 2002.";
    _self.wiki="https://en.wikipedia.org/wiki/Endeavor_Air";
    _self.headquname="Minneapolis, MN";
    _self.AOC="REXA257A";
    _self.IATA="9E";
    _self.ICAO="EDV";
    _self.website="endeavorair.com";
    this.draw();
  }
  
  american(){
    var _self = this;
    _self.file_name = "data/american_airlines.json";
    _self.airline="American Airlines"; //same as in file pie_chart.csv
    _self.airl_name="American Airlines";
    _self.image="//upload.wikimedia.org/wikipedia/commons/thumb/2/23/American_Airlines_logo_2013.svg/300px-American_Airlines_logo_2013.svg.png";
    _self.info="American Airlines, Inc. is a major United States airline headquartered in Fort Worth, Texas, within the Dallas-Fort Worth metroplex. It is the world's largest airline when measured by fleet size, revenue, scheduled passengers carried, scheduled passenger-kilometers flown, and number of destinations served. ";
    _self.wiki="https://en.wikipedia.org/wiki/American_Airlines";
    _self.headquname="Centre Port";
    _self.AOC="AALA025A";
    _self.IATA="AA";
    _self.ICAO="AAL";
    _self.website="www.aa.com";
    this.draw();
  }

  alaska(){
    var _self = this;
    _self.file_name = "data/alaska_airlines.json";
    _self.airline="Alaska Airlines"; //same as in file pie_chart.csv
    _self.airl_name="Alaska Airlines";
    this.draw();
  }

  jetblue(){
    var _self = this;
    _self.file_name = "data/jetblue_airlines.json";
    _self.airline="JetBlue Airways"; //same as in file pie_chart.csv
    _self.airl_name="JetBlue Airways";
    this.draw();
  }

  continental(){
    var _self = this;
    _self.file_name = "data/continent_air.json";
    _self.airline="Continental Air"; //same as in file pie_chart.csv
    _self.airl_name="Continental Airlines";
    this.draw();
  }

  delta(){
    var _self = this;
    _self.file_name = "data/delta_air.json";
    _self.airline="Delta Air"; //same as in file pie_chart.csv
    _self.airl_name="Delta Airlines";
    this.draw();
  }

  frontier(){
    var _self = this;
    _self.file_name = "data/frontier_air.json";
    _self.airline="Frontier Airlines"; //same as in file pie_chart.csv
    _self.airl_name="Frontier Airlines";
    this.draw();
  }

  airtran(){
    var _self = this;
    _self.file_name = "data/airtran_air.json";
    _self.airline="AirTran Airways"; //same as in file pie_chart.csv
    _self.airl_name="AirTran Airways";
    this.draw();
  }

  hawaiian(){
    var _self = this;
    _self.file_name = "data/hawaiian_air.json";
    _self.airline="Hawaiian Airlines"; //same as in file pie_chart.csv
    _self.airl_name="Hawaiian Airlines";
    this.draw();
  }

  americawest(){
    var _self = this;
    _self.file_name = "data/american_west.json";
    _self.airline="America West"; //same as in file pie_chart.csv
    _self.airl_name="America West";
    this.draw();
  }

  aloha(){
    var _self = this;
    _self.file_name = "data/aloha_air.json";
    _self.airline="Aloha Air"; //same as in file pie_chart.csv
    _self.airl_name="Aloha Airlines";
    this.draw();
  }

  spirit(){
    var _self = this;
    _self.file_name = "data/spirit.json";
    _self.airline="Spirit Air"; //same as in file pie_chart.csv
    _self.airl_name="Spirit Airlines";
    this.draw();
  }

  northwest(){
    var _self = this;
    _self.file_name = "data/northwest_air.json";
    _self.airline="Northwest Airlines"; //same as in file pie_chart.csv
    _self.airl_name="Northwest Airlines";
    this.draw();
  }

  psa(){
    var _self = this;
    _self.file_name = "data/psa_airline.json";
    _self.airline="PSA Airlines"; //same as in file pie_chart.csv
    _self.airl_name="PSA Airlines";
    this.draw();
  }

  skywest(){
    var _self = this;
    _self.file_name = "data/skywest_airline.json";
    _self.airline="SkyWest Airlines"; //same as in file pie_chart.csv
    _self.airl_name="SkyWest Airlines";
    this.draw();
  }

  ata(){
    var _self = this;
    _self.file_name = "data/ata_airlines.json";
    _self.airline="ATA Airlines"; //same as in file pie_chart.csv
    _self.airl_name="ATA Airlines";
    this.draw();
  }

  united(){
    var _self = this;
    _self.file_name = "data/united_air.json";
    _self.airline="United Air"; //same as in file pie_chart.csv
    _self.airl_name="United Airlines";
    this.draw();
  }

  us(){
    var _self = this;
    _self.file_name = "data/us_airways.json";
    _self.airline="US Airways"; //same as in file pie_chart.csv
    _self.airl_name="US Airways";
    this.draw();
  }

  virgin(){
    var _self = this;
    _self.file_name = "data/virgin_america.json";
    _self.airline="Virgin America"; //same as in file pie_chart.csv
    _self.airl_name="Virgin America";
    this.draw();
  }

  southwest(){
    var _self = this;
    _self.file_name = "data/southwest_airlines.json";
    _self.airline="Southwest Airlines"; //same as in file pie_chart.csv
    _self.airl_name="Southwest Airlines";
    this.draw();
  }
  
  mesa(){
    var _self = this;
    _self.file_name = "data/mesa_airlines.json";
    _self.airline="Mesa Airlines"; //same as in file pie_chart.csv
    _self.airl_name="Mesa Airlines";
    this.draw();
  }

  constructor() { }

  ngOnInit() {
  }
  draw()
  {
    // var imag = d3.select('#img').append('svg').append('svg:image')
    //              .attr('xlink:href', _self.image)
    //              .attr('height','71')
    //              .attr('width','121');
    d3.select("#fordisp").attr("class","view");
    d3.select("#south").select("svg").remove();
    var _self = this;
    function linechart(data){
      var width = 700;
      var height = 300;
      var margin = 40;
      var duration = 400;
  
      var lineOpacity = "100";
      var lineOpacityHover = "1.0";
      var otherLinesOpacityHover = "0.1";
      var lineStroke = "2px";
      var lineStrokeHover = "4px";
  
      var circleOpacity = '100';
      
      var circleOpacityOnLineHover = "0.55"
      var circleRadius = 3;
      var circleRadiusHover = 6;
  
      /* Format Data */
      var parseDate = d3.timeParse("%Y");
      data.forEach(function(d) { 
      d.values.forEach(function(d) {
          d.year = parseDate(d.year);
          d.arrdelay = +d.arrdelay;
          d.depdelay = +d.depdelay;    
      });
      });
      var tic = Object.keys(data[0].values).length;
      /* Scale */
      var xScale = d3.scaleTime()
      .domain(d3.extent(data[0].values, d => +d["year"]))
      .range([0, width-margin]);
  
      var yScale = d3.scaleLinear()
      .domain([0, 28])
      .range([height-margin, 0]);
  
      var color = d3.scaleOrdinal(d3.schemeCategory10);
  
      /* Add SVG */

      var svg = d3.selectAll("#south").append("svg")
      .attr("width", (width+margin + 60)+"px")
      .attr("height", (height+margin)+"px")
      .append('g')
      .attr("transform", `translate(${margin}, ${margin})`);

      // Draw the legend
      var lst = ["Arrival Delay","Departure Delay"];
      var legend = svg.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'legend');
  
      legend.append('rect')
      .attr('x', width - 170)
      .attr('y', function(d, i) { return height/ 8 - (i + 1) * 20; })
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', function(d, i:any) { return color(i); });
      
      legend.append('text')
      .attr('x', width - 150)
      .attr('y', function(d, i) { return height/ 8 - (i + 1) * 20 + 10; })
      .text(function(d,i) { return lst[i]; });
      
      /* Add line into SVG */
      var line = d3.line()
      .x(d => xScale(d["year"]))
      .y(d => yScale(d["arrdelay"]));
  
      let lines = svg.append('g')
                     .attr('class', 'lines');
  
      lines.selectAll('.line-group')
          .data(data)
          .enter()
          .append('g')
          .attr('class', 'line-group')
          .on("mouseover", function(d, i:any) {
            svg.append("text")
              .attr("class", "title-text")
              .style("fill", color(i))        
              .text(d["airline"])
              .attr("text-anchor", "middle")
              .attr("x", (width-margin)/2)
              .attr("y", 5);
        })
      //   .on("mouseout", function(d) {
      //     svg.select(".title-text").remove();
      // })
      .append('path')
      .attr('class', 'line')  
      .attr('d', d => line(d["values"]))
      .style('stroke', (d, i:any) => color(i))
      .style('opacity', lineOpacity)
      .style('fill', 'none')
      .on("mouseover", function(d) {
          d3.selectAll('.line')
                      .style('opacity', otherLinesOpacityHover);
          d3.select(this).transition().duration(200)
          .style('opacity', lineOpacityHover)
          .style("stroke-width", lineStrokeHover)
          .style("cursor", "pointer");    
      })
      .on("mouseout", function(d) {
          d3.selectAll(".line")
                      .style('opacity', lineOpacity);
          d3.selectAll('.circle')
                      .style('opacity', circleOpacity);
          d3.select(this).transition().duration(200)
          .style("stroke-width", lineStroke)
          .style("cursor", "none");
          d3.selectAll('.legend')
          .style('opacity', 1);
      });
     
      /* Add circles in the line */
      lines.selectAll("circle-group")
      .data(data).enter()
      .append("g")
      .style("fill", "#FFF")//(d, i) => color(i))
      .style("stroke", function(d, i:any) { return color(i); })
      .selectAll("circle")
      .data(d => d["values"])
      .enter()
      .append("g")
      .attr("class", "circle")
      .attr("r", 4) 
      .on("mouseover", function(d) {
          d3.select(this)     
          .style("cursor", "pointer")
          .append("text")
          .attr("class", "text")
          .html(d["year"].getFullYear() + ": " + d["arrdelay"] + ' min')
          .attr("x", d => xScale(d["year"]) + 5)
          .attr("y", d => yScale(d["arrdelay"]) - 10);
      })
  
      .on("mouseout", function(d) {
          d3.select(this)
          .style("cursor", "none")  
          .transition()
          .duration(duration)
          .selectAll(".text").remove();
      })
      .append("circle")
      .attr("cx", d => xScale(d["year"]))
      .attr("cy", d => yScale(d["arrdelay"]))
      .attr("r", circleRadius)
      .style('opacity', circleOpacity)
      .on("mouseover", function(d) {
          d3.select(this)
              .transition()
              .duration(duration)
              .attr("r", circleRadiusHover);
          })
      .on("mouseout", function(d) {
          d3.select(this) 
              .transition()
              .duration(duration)
              .attr("r", circleRadius);  
          });
      /* Add Axis into SVG */
      var xAxis = d3.axisBottom(xScale).ticks(tic);
      var yAxis = d3.axisLeft(yScale).ticks(5);
  
      svg.append("g")
      .attr("class", "xAxis")
      .attr("transform", `translate(0, ${height-margin})`)
      .call(xAxis)
      .append('text')
      //.attr("fill", "#000")
       .text("Year")
       .attr("text-anchor", "middle") 
       .attr("x", width/2)
      .attr("y", 40) 
      ;
  
      svg.append("g")
      .attr("class", "yAxis")
      .call(yAxis)
      .append('text')
      .attr("x", -width/4 )
      .attr("y", -35)
      .attr("transform", "rotate(-90)")
      //.attr("fill", "#000")
      .text("Arrival Delay(minutes)");
  } 

        d3.json(_self.file_name).then(function (data) {
          linechart(data);});

          function makepie() {
            // var _self = this;
            var svg = d3.select("#chart-area"),
              width = +svg.attr("width"),
              height = +svg.attr("height"),
              radius = 100,//Math.min(width, height) / 2.5,
              g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            // var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "pink", "yellow", "green"]);
            var pie = d3.pie() //pie generator
              .sort(null)
              .value(function (d:any) {return d[1];});
            
            _self.card_text = _self.init_text;
            
            var color = d3.scaleOrdinal(d3.schemeCategory10);
            
            var path = d3.arc()
              .outerRadius(radius - 10)
              .innerRadius(120); //make != 0 for a donut chart
            
            var label = d3.arc()
              .outerRadius(radius+30)
              .innerRadius(80);
            
              d3.csv("data/pie_chart.csv", function (d:any) {
                  return [d['DelayTypes'], d[_self.airline]]
                }).then(function (data:any) {
                    data = data
                var arc_g = g.selectAll(".arc")
                .data(pie(data)) //use pie generator to create the data needed for the each slice of the pie
                .enter().append("g")
                .attr("class", "arc");
                
                arc_g.append("path") //for each slide use arc path generator to draw the pie
                .attr("d", <any>path)
                .attr("fill", function (d:any, i:any) {return color(i);}); //get data from node (select and $0._data_ in console)
              
                // arc_g.append("text") //for each slide use label path generator to place the text
                // .attr("transform", function (d:any) {return "translate(" + label.centroid(d) + ")"})
                // .attr("dy", "0.15em")
                // .attr("fill","white")
                // .text(function (d:any) {return d.data[0]});
              
                arc_g.on("mouseover", function (d:any) {
                _self.airline_name = _self.airline;
                _self.card_text = d.data[0] +"\n"+  ":  " + d.data[1] + " min";})
                arc_g.on("mouseout", function () {
                _self.airline_name = "";
                _self.card_text = _self.init_text});

                //addin

                    //D3 Vertical Legend//////////////////////////
                    var gh = ['Departure Delay','Carrier Delay','Weather Delay','NASA Delay','Security Delay']
                    var legend3 = svg.selectAll('.legend3')
                    .data(color.domain())
                    .enter().append('g')
                    .attr("class", "legends3")
                    .attr("transform", function (d, i) {
                    {
                        return "translate(0," + i * 20 + ")"
                    }
                })
                
                legend3.append('rect')
                    .attr("x", 500)
                    .attr("y", 0)
                    .attr("width", 10)
                    .attr("height", 10)
                    .style("fill", function (d, i:any) {
                    return color(i)
                })
                
                legend3.append('text')
                    .attr("x", 520)
                    .attr("y", 10)
                //.attr("dy", ".35em")
                .text(function (d, i) {
                    return gh[i]
                })
                    .attr("class", "textselected")
                    .style("text-anchor", "start")
                    .style("font-size", 15)
            });
          }

          makepie();
  }

}
