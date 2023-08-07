// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { Bar } from 'react-chartjs-2'
import { ChartData, ChartOptions } from 'chart.js'

import 'chartjs-plugin-datalabels';

interface HorizontalBarProps {
  green: string
  blue: string
  labelColor: string
  borderColor: string
  legendColor: string
  orange: string
}

const ChartjsHorizontalBarChart = (props: HorizontalBarProps) => {
  // ** Props
  const { green, blue, orange, labelColor, borderColor, legendColor } = props

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 0,
          bottomRight: 0
        }
      }
    },
    layout: {
      padding: { top: -4 }
    },
    scales: {
      x: {
        min: 0,
        grid: {
          drawTicks: false,
          color: borderColor,
        },
        stacked:true,
        ticks: { color: labelColor }
      },
      y: {
        grid: {
          display: false,
          color: borderColor
        },
        stacked:true,
        ticks: { color: labelColor }
      }
    },
    plugins: {
      legend: {
        align: 'end',
        position: 'top',
        labels: { color: legendColor },
        display:false
      },
      datalabels: {
        formatter: (value, context) => {
          return context.dataset.label + ": " + value;
        },
        color: 'black'
      }
    },
  }

  const data: ChartData<'bar'> = {
    labels: ['MON', 'TUE', 'WED ', 'THU', 'FRI'],
    datasets: [{
            label: 'Bojana regularno vreme',
            data: [7],
            backgroundColor: blue,
            stack: 'Bojana'
        }, {
            label: 'Bojana prekovremeno',
            data: [2],
            backgroundColor: green,
            stack: 'Bojana'
        }, {
            label: 'Bojana extra prekovremeno',
            data: [3],
            backgroundColor: orange,
            stack: 'Bojana'
        },
        {
          label: 'Green Segment',
          data: [7],
          backgroundColor: 'green',
          stack: 'Milica'
      }, {
          label: 'Orange Segment',
          data: [0],
          backgroundColor: 'orange',
          stack: 'Milica'
      }, {
          label: 'Red Segment',
          data: [0],
          backgroundColor: 'red',
          stack: 'Milica'
      }]
  }

  return (
    <Card>
      <CardHeader title='Workhour log' subheader='' />
      <CardContent>
        <Bar data={data} height={400} options={options} />
      </CardContent>
    </Card>
  )
}

export default ChartjsHorizontalBarChart
