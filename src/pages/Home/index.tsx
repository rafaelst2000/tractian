import { Card } from "../../components/Card";
import { LastWorkOrderCard } from "./components/LastWorkOrderCard";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { HomeContainer } from "./styles";
import { LastAssetsCard } from "./components/LastAssetsCard";


const resumeCards = [
  {
    info: 'Ativos',
    quantity: 6,
  },
  {
    info: 'Empresas',
    quantity: 2,
  },
  {
    info: 'Unidades',
    quantity: 3,
  },
  {
    info: 'Usuários',
    quantity: 4,
  }
]

const chartCards = [
  {
    info: 'Média de temperatura',
    quantity: 6,
  },
  {
    info: 'Média de saúde',
    quantity: 2,
  },
  {
    info: 'Média de tempo ligado',
    quantity: 4,
  },
  {
    info: 'Média de coletas',
    quantity: 4,
  },
  {
    info: 'Média de coletas/s',
    quantity: 3,
  },
]

const options = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Média de coletas/segundo'
  },
  xAxis: {
    categories: ['Motor H13D-1', 'Motor H12D-1', 'Motor H12D-3']
  },
  series: [{
    type: 'column',
    name: 'Tempo (segundos)',
    colorByPoint: true,
    data: [5412, 4977, 4730],
    showInLegend: false
  }]
}

export function Home() {
  return (
    <HomeContainer>
      <div className="resume-cards">
        {resumeCards.map(card => {
          return (
            <Card key={card.info}>
              <p>{card.info}</p>
              <strong>{card.quantity}</strong>
            </Card>
          )
        })}
      </div>

      <Card resetPadding>
        <div className="chart-container">
          <div className="chart">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <div>
            {chartCards.map(card => {
              return (
                <div className="chart-container-card" key={card.info}>
                  <p>{card.info}</p>
                  <strong>{card.quantity}</strong>
                </div>
              )
            })}
          </div>
        </div>
      </Card>
      
      <div className="info-cards">
        <LastAssetsCard />
        <LastWorkOrderCard />
      </div>
    </HomeContainer>
  )
}