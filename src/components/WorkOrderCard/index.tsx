import { Card } from "../Card";
import { LastWorkOrderCardContainer, Task, StyledCheckbox, Priority } from "./styles";
import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { Workorder } from "../../@types";

interface WorkOrderCardProps {
  isLastWorkOrder?: boolean
  workorder: Workorder
}

export function WorkOrderCard({ isLastWorkOrder = false, workorder }: WorkOrderCardProps) {
  return (
    <Card>
      {workorder &&
      <LastWorkOrderCardContainer>
        <div className="title-section">
          <h4>{isLastWorkOrder ? 'Última ordem de serviço' : workorder.title }</h4>
          {isLastWorkOrder && <span>Ver todas</span>}
        </div>
        <div className="description-section">
          <p>{isLastWorkOrder ? workorder.title : workorder.description}</p>
          <Priority status={workorder.priority}>{workorder.priority}</Priority>
        </div>

        <Task>
          {workorder.checklist.map((checkList) => {
            return (
              <div className="checkbox-section" key={checkList.task}>
                <StyledCheckbox checked={checkList.completed}>
                  <Checkbox.Indicator>
                    {checkList.completed && <Check size={14} color={'#fff'}/>}
                  </Checkbox.Indicator>
                </StyledCheckbox>
                <p style={{textDecoration: checkList.completed ? 'line-through' : 'none'}}>{checkList.task}</p>
              </div>
            )
          })}
        </Task>
      </LastWorkOrderCardContainer>}
    </Card>
  )
}