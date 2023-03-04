import { createContext, ReactNode, useEffect, useState } from "react";
import { Asset} from "../@types";


interface AssetContextType {
  assets: Asset[]
  assetsTempAverage: number
  assetsHealthScoreAverage: number
  assetsUptimeAverage: number
  assetsCollectsAverage: number
  getCollectAverageByAsset: (asserts: Asset) => number
}

interface AssetProviderProps {
  children: ReactNode
}

export const AssetContext = createContext<AssetContextType>({} as AssetContextType)

const baseUrl = 'https://my-json-server.typicode.com/tractian/fake-api'

export function AssetContextProvider({ children }: AssetProviderProps) {
  const [assets, setAssets] = useState<Asset[]>([])
  const assetsTempAverage = getAssetsTempAverage()
  const assetsHealthScoreAverage = getAssetsHealthScoreAverage()
  const assetsUptimeAverage = getAssetsUptimeAverage()
  const assetsCollectsAverage = getAssetsCollectsAverage()

  async function loadAssets() {
    const response = await fetch(`${baseUrl}/assets`)
    const data = await response.json() as Asset[]

    setAssets(data)
  }

  function getAssetsTempAverage(): number{
    if(!assets.length) return 0
    const assetsTemp = assets.map(asset => asset.specifications.maxTemp)
    const totalTemp = assetsTemp.reduce((acc, temp) => acc + temp)

    return getAssetDivision(totalTemp)
  }
  
  function getAssetsHealthScoreAverage(): number{
    if(!assets.length) return 0
    const assetsHealth = assets.map(asset => asset.healthscore)
    const totalHealth = assetsHealth.reduce((acc, temp) => acc + temp)

    return getAssetDivision(totalHealth)
  }

  function getAssetsUptimeAverage(): number{
    if(!assets.length) return 0
    const assetsUptime = assets.map(asset => asset.metrics.totalUptime)
    const totalUptime = assetsUptime.reduce((acc, temp) => acc + temp)

    return getAssetDivision(totalUptime)
  }

  function getAssetsCollectsAverage(): number{
    if(!assets.length) return 0
    const assetsCollects = assets.map(asset => asset.metrics.totalCollectsUptime)
    const totalCollects = assetsCollects.reduce((acc, temp) => acc + temp)

    return getAssetDivision(totalCollects)
  }

  function getCollectAverageByAsset(asset: Asset): number{
    return asset.metrics.totalCollectsUptime / asset.metrics.totalUptime
  }

  function getAssetDivision(param: string | number) {
    return Number((Number(param) / assets.length).toFixed(0))
  }
  
  useEffect(() => {
    loadAssets()
  }, [])

  return (
    <AssetContext.Provider
      value={{ 
        assets, assetsTempAverage, 
        assetsHealthScoreAverage, 
        assetsUptimeAverage, 
        assetsCollectsAverage, 
        getCollectAverageByAsset 
      }}>
        {children}
    </AssetContext.Provider>
  )
}