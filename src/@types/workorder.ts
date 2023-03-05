type WorkorderChecklist = {
  completed: boolean
  task: string
}

export interface Workorder {
  id: number
  assetId: number
  checklist: WorkorderChecklist[]
  description: string
  priority: 'high' | 'low' | 'medium'
  status: string
  title: string
}
