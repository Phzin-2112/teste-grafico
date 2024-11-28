const ctx = document.getElementById('myChart').getContext('2d');

const data = {
  labels: [0, 
    1, 
    2, 
    3, 
    4, 
    5 ], // Labels para o eixo X (opcional)
  datasets: [{
    label: 'First Dataset',  // Esse é o label do dataset
    data: [30, 23, 21, 19, 17, 3], // Valores do eixo Y
    backgroundColor: 'white', // Cor de fundo do gráfico
    borderColor: 'black', // Cor da borda
    borderWidth: 2,
    pointRadius: 5,
    pointHoverRadius: 7,
    fill: false
  }]
};

const config = {
  type: 'line', // Tipo do gráfico
  data: data,
  options: {
    responsive: true,
    animations: {
        radius: {
          duration: 1500, // Duração da animação (em ms)
          easing: 'easeOutBounce' // Tipo de animação
        }
      },
    plugins: {
      legend: {
        labels: {
          color: 'black',  // Cor do label da legenda (nome do dataset)
        }
      }
    },
  
    scales: {
      x: {
        ticks: {
          color: 'black', // Cor dos números no eixo X
        }
      },
      y: {
        ticks: {
          color: 'black', // Cor dos números no eixo Y
        }
      }
    }
  }
};

new Chart(ctx, config);
