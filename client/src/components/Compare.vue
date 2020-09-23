<template>
    <section class="h-100">
        <header class="pt-5 pl-4 mb-5">
            <h1>Home Value Visualization</h1>
        </header>
        <main>
            <div>
                <canvas id="myChart" width="75"></canvas>
            </div>
            <div class="controls row no-gutters pl-3">
                <div class="col-3">
                    test
                </div>
                <div class="col-3">
                    test
                </div>
                <div class="col-3">
                    test
                </div>
                <div class="col-3">
                    test
                </div>
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
                chart: null
            }
        },
        methods : {
            getHouseValues(selection){                
                var selectedIndex = document.getElementById(selection.currentTarget.id).value;

                var order = selectedIndex.split("_")[0].toLowerCase();
                var quantity = selectedIndex.split("_")[1];
                console.log(`${order}, ${quantity}`);  
                
                axios.get(`/houses/${order}/${quantity}`)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        mounted(){
            var ctx = document.getElementById('myChart').getContext('2d');

            var myChart = new Chart(ctx, {                         
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
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
                    legend: {
                        labels: {
                            fontColor: "black"
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontColor: "black",
                                fontSize: 18
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontColor: "black",
                                fontSize: 18
                            }
                        }]
                    }
                }
            });     
            
            this.chart = myChart;
        }        
    }
</script>

<style scoped>
    section {
        background-image: url('~@/assets/Abstract-Timekeeper.svg');
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
        color: white;
    }
</style>