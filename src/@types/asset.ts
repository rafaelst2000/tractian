type AssetHealthHistory = {
  status: string
  timestamp: string
}

type AssetMetrics = {
  totalCollectsUptime: number
  totalUptime: number
}

type AssetSpecs = {
  maxTemp: string
}

export interface Asset {
  id: number
  companyId: number
  healthHistory: AssetHealthHistory
  healthscore: number
  image: string
  metrics: AssetMetrics
  name: string
  sensors: [String]
  specifications: AssetSpecs
  status: 'inAlert' | 'inDowntime' | 'inOperation'
}
