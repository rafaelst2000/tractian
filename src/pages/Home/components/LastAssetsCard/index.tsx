import { Link } from "react-router-dom";
import { Card } from "../../../../components/Card";
import { useAsset } from "../../../../hooks/useAsset";
import { LastAssetsCardContainer, Task } from "./styles";

export function LastAssetsCard() {
  const { assets } = useAsset()
  
  const filteredAssetsDesc = assets.sort((a, b) => b.id - a.id)
  const lastThreeAssets = filteredAssetsDesc.slice(3)

  return (
    <Card>
      <LastAssetsCardContainer>
        <div className="title-section">
          <h4>Últimos ativos</h4>
          <Link className="see-all" to={'/assets'}>Ver todos</Link>
        </div>
        <div className="description-section">
          <p>Ativos cadastrados na plataforma recentemente</p>
        </div>

        <Task>
          {lastThreeAssets.map((asset) => {
            return (
              <div className="asset-section" key={asset.id}>
                <div>
                  <img src={asset.image} />
                  <p>{asset.name}</p>
                </div>
                <span>{asset.sensors[0]}</span>
              </div>
            )
          })}
        </Task>
      </LastAssetsCardContainer>
    </Card>
  )
}