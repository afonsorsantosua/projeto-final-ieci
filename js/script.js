function draw() {
    $("#myGraph").highcharts({
    chart: { type: "column" },
    title: { text: "Divisão por géneros e idades da população de Viseu, refente a 2024" },
    xAxis: { categories: ["<15>", "15 - 64" , "≥65"]},
    series:[
        { name: "Homens",
            data: [6.693, 31.135, 11.246]
        },
        {
            name: "Mulheres",
            data: [6.345, 33.821, 14.262]
        }
]
});
}