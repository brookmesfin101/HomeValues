<template>
    <section class="h-100">
        <header class="pt-5 pl-5 mb-5">
            <h1>Home Value Visualization</h1>
        </header>
        <main>
            <div>
                <canvas id="myChart" width="75"></canvas>
            </div>
        </main>
    </section>
</template>

<script>
    import Chart from '../scripts/Chart.bundle.min.js';
    import axios from 'axios';

    export default {
        data() {
            return {
                chart: null,
                axiosConfig: null,
                chartTitle: null
            }
        },
        methods : {
            getHouseValues(event, id){             
                var selectedIndex = id == null ? document.getElementById(event.currentTarget.id).value : document.getElementById(id).value;

                var order = selectedIndex.split("_")[0].toLowerCase();
                var quantity = selectedIndex.split("_")[1];                                
                
                this.axiosConfig.get(`/houses/${order}/${quantity}`)
                    .then((res) => {       
                        if(order == "top"){
                            this.chartTitle = `${quantity} Most Expensive Metros Areas`;
                            this.updateBarGraph(res.data, "MostToLeast");                            
                        } else {
                            this.chartTitle = `${quantity} Least Expensive Metros Areas`;
                            this.updateBarGraph(res.data, "LeastToMost"); 
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            getHouseValueByState(event, id){
                var stateSelect = id == null ? document.getElementById(event.currentTarget.id) : document.getElementById(id);
                var stateCode = stateSelect.value;
                var stateName = stateSelect[stateSelect.selectedIndex].text;
                var order = ("TOP").toLowerCase();                
                var quantity = 20;

                this.axiosConfig.get(`/houses/${stateCode}/${order}/${quantity}`)
                    .then((res) => {
                        if(order == "top"){
                            this.chartTitle = `House Values By Metro Area in ${stateName}`;
                            this.updateBarGraph(res.data, "MostToLeast");                            
                        } else {
                            this.chartTitle = `${quantity} Least Expensive Metros Areas`;
                            this.updateBarGraph(res.data, "LeastToMost"); 
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            getHouseValueOverYears(event, id){
                var stateSelect = id == null ? document.getElementById(event.currentTarget.id) : document.getElementById(id);
                var stateCode = stateSelect.value;
                var stateName = stateSelect[stateSelect.selectedIndex].text;
                var order = ("TOP").toLowerCase();                
                var quantity = 20;

                this.axiosConfig.get(`/houses/by-year/${stateCode}/${order}/${quantity}`)
                    .then((res) => {
                        if(order == "top"){
                            this.chartTitle = `House Values Over the Years in ${stateName}`;
                            this.updateWithLineGraph(res.data);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            updateWithLineGraph(data){
                console.log(data);
            },
            updateBarGraph(data, sortOrder){    
                if(sortOrder == "MostToLeast"){
                    data.sort((a, b) => {
                        if(a["y2016"] > b["y2016"]){ 
                            return -1;
                        } else {
                            return 1;
                        }                    
                    });
                } else {
                    data.sort((a, b) => {
                        if(a["y2016"] > b["y2016"]){ 
                            return 1;
                        } else {
                            return -1;
                        }                    
                    });
                }                
                                
                this.chart.data.datasets[0].data = [];
                this.chart.data.datasets[0].backgroundColor = [];
                this.chart.data.datasets[0].borderColor = [];
                this.chart.data.labels = [];
                this.chart.options.title.text = this.chartTitle;

                data.forEach(el => {
                    this.chart.data.datasets[0].data.push(el["y2016"]);
                    this.chart.data.labels.push(`${el["Metro"]}, ${el["State"]}`);
                    this.chart.data.datasets[0].backgroundColor.push(this.randomColorGenerator());
                    this.chart.data.datasets[0].borderColor.push("light-gray");
                });
                
                this.chart.update();
                this.randomColorGenerator();
            },
            randomColorGenerator(){
                var color1 = (Math.random() * 255).toString();
                var color2 = (Math.random() * 255).toString();
                var color3 = (Math.random() * 255).toString();
                
                var color = `rgba(${color1}, ${color2}, ${color3}, 0.6)`;

                return color;
            },
            initChart(){
                var ctx = document.getElementById('myChart').getContext('2d');

                var myChart = new Chart(ctx, {                         
                    type: 'bar',
                    data: {
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: 'House Values',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: this.chartTitle,
                            fontSize: 20
                        },
                        tooltips: {
                            callbacks: {
                                label: function(tooltipItem, data){
                                    var value = data.datasets[0].data[tooltipItem.index];                                    
                                    if(parseInt(value) >= 1000){                                        
                                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    } else {
                                        return '$' + value;
                                    }
                                }
                            }
                        },
                        legend: {
                            display: false,
                            labels: {
                                fontColor: "black"
                            }
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: "rgb(94 94 94)",
                                    fontSize: 13,
                                    callback: function(value) {
                                        if(parseInt(value) >= 1000){
                                            return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                        } else {
                                            return '$' + value;
                                        }
                                    }
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: "House Value in ($)",
                                    fontSize: 18
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    fontColor: "rgb(94 94 94)",
                                    fontSize: 13
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: "Metro Area",
                                    fontSize: 18
                                }
                            }]
                        }
                    }
                });     
                
                this.chart = myChart;
            },
            initAxios(){
                var config = axios.create({
                    baseURL: 'http://localhost:8081'
                });
                this.axiosConfig = config;
                }
        },
        mounted(){            
            this.initAxios();
            this.initChart();
        }        
    }
</script>

<style scoped>
    section {
        background-image: url('~@/assets/Wintery-Sunburst.svg');
        background-size: cover;
    }
        .section::before {
            content: "";
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: rgba(0,0,0,.5);
        }
    header h1 {
        color: rgb(94 94 94);
        font-size: 4rem;
    }
</style>