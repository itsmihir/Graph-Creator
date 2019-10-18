

//ansd


const xaxis=[];
const yaxis=[];


function chart(graph)
{

   
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: graph,
    data: {
        labels: xaxis,
        datasets: [{
            label: '',
            fill: false,
            data: yaxis,
     
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
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

}



const input =document.querySelector('input[type="file"]')
input.addEventListener('change',()=>
{
    const graph='line'
   
    const reader = new FileReader();
    reader.onload=function()
    {
        const lines = reader.result.split('\n').map(function(line)
        {
            return line.split(',');
        })
      
        for(let i=0;i<lines.length;i++)
        {
            xaxis.push(lines[i][0]);
         
        }

        for(let i=0;i<lines.length;i++)
        {
            yaxis.push(lines[i][1]);
          
        }
       
       
      
    }


 
    reader.readAsText(input.files[0]);
  
   
})


function get(graph)
{
    chart(graph);
}

function about()
{
    window.location.href="about.html"
}

function gotohome (graph)
{ 
    window.location.href="index.html" 
    chart(graph);
};