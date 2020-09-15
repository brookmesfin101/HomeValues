<template>
    <section class="h-100">
        <header>
            <h1>Home Value Visualization</h1>
        </header>
        <main>
            <canvas id="myChart" width="400" height="200"></canvas>
        </main>
    </section>
</template>

<script>
    import Chart from '../scripts/Chart.bundle.min.js'

    export default {
        data() {
            return {
                chart: null
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
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
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
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
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
    header h1 {
        color: white;
    }
</style>