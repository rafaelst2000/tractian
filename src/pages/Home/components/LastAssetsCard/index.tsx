import { Card } from "../../../../components/Card";
import { LastAssetsCardContainer, Task } from "./styles";

const assets = [
  {
    id: 6,
    name: 'Fan D22',
    sensor: 'MOE1378',
    img: 'https://tractian-img.s3.amazonaws.com/2f7eb04cfa255ab00088534f7d51f6f4.jpeg'
  },
  {
    id: 5,
    name: 'Fan D22',
    sensor: 'MOE1378',
    img: 'https://tractian-img.s3.amazonaws.com/2f7eb04cfa255ab00088534f7d51f6f4.jpeg'
  },
  {
    id: 4,
    name: 'Fan D22',
    sensor: 'MOE1378',
    img: 'https://tractian-img.s3.amazonaws.com/2f7eb04cfa255ab00088534f7d51f6f4.jpeg'
  },

]

export function LastAssetsCard() {
  return (
    <Card>
      <LastAssetsCardContainer>
        <div className="title-section">
          <h4>Últimos ativos</h4>
          <span>Ver todos</span>
        </div>
        <div className="description-section">
          <p>Ativos cadastrados na plataforma recentemente</p>
        </div>

        <Task>
          {assets.map((asset: any) => {
            return (
              <div className="asset-section" key={asset.id}>
                <div>
                  <img src={asset.img} />
                  <p>{asset.name}</p>
                </div>
                <span>{asset.sensor}</span>
              </div>
            )
          })}
        </Task>
      </LastAssetsCardContainer>
    </Card>
  )
}