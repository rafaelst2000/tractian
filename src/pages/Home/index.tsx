import { Card } from '../../components/Card'
import { WorkOrderCard } from '../../components/WorkOrderCard'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { HomeContainer } from './styles'
import { LastAssetsCard } from './components/LastAssetsCard'
import { useAsset } from '../../hooks/useAsset'
import { useCompany } from '../../hooks/useCompany'
import { useUnit } from '../../hooks/useUnit'
import { useUser } from '../../hooks/useUser'
import { useWorkorder } from '../../hooks/useWorkorder'

export function Home() {
  const {
    assets,
    assetsTempAverage,
    assetsHealthScoreAverage,
    assetsUptimeAverage,
    assetsCollectsAverage,
    getCollectAverageByAsset,
  } = useAsset()
  const { companies } = useCompany()
  const { units } = useUnit()
  const { users } = useUser()
  const { workorders } = useWorkorder()

  const filteredWorkordersDesc = workorders.sort((a, b) => b.id - a.id)
  const lastWorkorder = filteredWorkordersDesc.slice(1)[0]

  const resumeCards = [
    {
      info: 'Ativos',
      quantity: assets.length,
    },
    {
      info: 'Empresas',
      quantity: companies.length,
    },
    {
      info: 'Unidades',
      quantity: units.length,
    },
    {
      info: 'Usuários',
      quantity: users.length,
    },
  ]

  const chartCards = [
    {
      info: 'Média de temperatura',
      quantity: `${assetsTempAverage}ºC`,
    },
    {
      info: 'Média de saúde',
      quantity: `${assetsHealthScoreAverage}%`,
    },
    {
      info: 'Média de tempo em funcionamento',
      quantity: `${assetsUptimeAverage}`,
    },
    {
      info: 'Média de coletas',
      quantity: assetsCollectsAverage,
    },
    {
      info: 'Média de coletas / tempo',
      quantity: (assetsCollectsAverage / assetsUptimeAverage).toFixed(2),
    },
  ]

  const chartOptions = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Coleta x Tempo',
    },
    xAxis: {
      categories: assets.map((asset) => asset.name),
    },
    series: [
      {
        type: 'column',
        name: 'Coleta x Tempo',
        colorByPoint: true,
        data: assets.map((asset) => getCollectAverageByAsset(asset)),
        showInLegend: false,
      },
    ],
  }

  return (
    <HomeContainer>
      <div className="resume-cards">
        {resumeCards.map((card) => {
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
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </div>
          <div>
            {chartCards.map((card) => {
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
        <WorkOrderCard isLastWorkOrder workorder={lastWorkorder} />
      </div>
    </HomeContainer>
  )
}
