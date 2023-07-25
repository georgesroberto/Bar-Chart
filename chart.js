const myData = [10,20,30,40,50];
const w = 500;
const h = 500;

const svg =   d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h)
svg.selectAll("rect")
    .data(myData)
    .enter()
    .append("rect")
    .attr("x", (d, i)=>i * 30)
    .attr("y", (d, i)=>h - 3 * d)
    .attr("width", 25)     
    .attr("height", (d, i)=> 3*d);
