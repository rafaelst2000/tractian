import { WorkOrderCard } from '../../components/WorkOrderCard'
import { useWorkorder } from '../../hooks/useWorkorder'
import { WorkordersContainer } from './styles'

export function Workorders() {
  const { workorders } = useWorkorder()
  const filteredWorkordersDesc = workorders.sort((a, b) => b.id - a.id)

  return (
    <WorkordersContainer>
      {filteredWorkordersDesc.map((workorder) => {
        return (
          <WorkOrderCard
            key={`${workorder.id}-${workorder.assetId}`}
            workorder={workorder}
          />
        )
      })}
    </WorkordersContainer>
  )
}
