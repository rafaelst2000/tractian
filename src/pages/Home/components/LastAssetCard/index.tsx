import { Card } from "../../../../components/Card";
import { useState } from 'react'
import { LastAssetCardContainer, Task, StyledCheckbox } from "./styles";
import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox';

const asset = {
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

export function LastAssetCard() {
  const [lastAsset, setLastAsset] = useState(asset) as any

  return (
    <Card>
      <LastAssetCardContainer>
        <div className="title-section">
          <h4>Últimas tarefas</h4>
          <span>Ver todas</span>
        </div>
        <p>{lastAsset.description}</p>

        <Task>
          {lastAsset.checklist.map((checkList: any) => {
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
      </LastAssetCardContainer>
    </Card>
  )
}