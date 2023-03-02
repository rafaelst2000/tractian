import { Card } from "../../../../components/Card";
import { useState } from 'react'
import { LastWorkOrderCardContainer, Task, StyledCheckbox, Priority } from "./styles";
import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox';

const workOrder = {
  "assetId": 5,
  "assignedUserIds": [
    1,
    2,
    3
  ],
  "checklist": [
    {
      "completed": false,
      "task": "Inspect Fan for visible damage"
    },
    {
      "completed": true,
      "task": "Test Fan for proper operation"
    },
    {
      "completed": true,
      "task": "Replace damaged parts"
    }
  ],
  "description": "The Fan is not working properly and needs to be repaired.",
  "id": 1,
  "priority": "high",
  "status": "completed",
  "title": "Repair Fan D21"
}

export function LastWorkOrderCard() {
  const [lastWorkOrder, setLastWorkOrder] = useState(workOrder) as any

  return (
    <Card>
      <LastWorkOrderCardContainer>
        <div className="title-section">
          <h4>Últimas tarefas</h4>
          <span>Ver todas</span>
        </div>
        <div className="description-section">
          <p>{lastWorkOrder.description}</p>
          <Priority status={lastWorkOrder.priority}>{lastWorkOrder.priority}</Priority>
        </div>

        <Task>
          {lastWorkOrder.checklist.map((checkList: any) => {
            return (
              <div className="checkbox-section" key={checkList.task}>
                <StyledCheckbox checked={checkList.completed} >
                  <Checkbox.Indicator>
                    {checkList.completed === true && <Check size={14} color={'#fff'}/>}
                  </Checkbox.Indicator>
                </StyledCheckbox>
                <p>{checkList.task}</p>
              </div>
            )
          })}
        </Task>
      </LastWorkOrderCardContainer>
    </Card>
  )
}