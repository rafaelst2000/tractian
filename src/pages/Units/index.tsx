import { UnitsContainer } from "./styles";
import { Table, Input, message } from 'antd';
import { Modal } from "../../components/Modal";
import { Confirm } from "../../components/Confirm";
import { useUnit } from "../../hooks/useUnit";
import { useCompany } from "../../hooks/useCompany";
import { useState } from "react";

interface UnitTableData {
  key: number
  companyId: number
  unit: string
  company: string
}

export function Units() {
  const { units, editUnit, deleteUnit } = useUnit()
  const { getCompanyNameById } = useCompany()
  const [selectedUnit, setSelectedUnit] = useState<UnitTableData>({} as UnitTableData)
  const [messageApi, contextHolder] = message.useMessage();

  const tableData = units.map(unit => {
    return {
      key: unit.id,
      unit: unit.name,
      companyId: unit.companyId,
      company: getCompanyNameById(unit.companyId)
    }
  }) as UnitTableData[]

  function handleChangeSelectedUnit(event: React.ChangeEvent<HTMLInputElement>){
    const newUnit = {
      ...selectedUnit,
      unit: event.target.value
    }
    setSelectedUnit(newUnit)
  }

  function onOpenModal(selectedId: number) {
    const selectedUnitData = tableData.filter(unit => unit.key === selectedId)[0]
    setSelectedUnit(selectedUnitData)
  }

  async function editSelectedUnit() {
    const unitToEdit = {
      id: selectedUnit.key,
      companyId: selectedUnit.companyId,
      name: selectedUnit.unit
    }
    await editUnit(unitToEdit)

    messageApi.open({
      type: 'success',
      content: `Unidade ${unitToEdit.name} editada com sucesso!`,
    });
  }

  async function deleteSelectedUnit(selectedUnit: UnitTableData) {
    await deleteUnit(selectedUnit.key)
    messageApi.open({
      type: 'success',
      content: `Unidade ${selectedUnit.unit} removida com sucesso!`,
    });
  }

  return(
    <UnitsContainer>
      {contextHolder}
      <Table dataSource={tableData}>
        <Table.Column title="Unidade" dataIndex="unit" key="unit" />
        <Table.Column title="Empresa" dataIndex="company" key="company" />
        <Table.Column
          width={'80px'}
          fixed="right"
          title=""
          key="action"
          render={(_: any, record: UnitTableData) => (
            <div>
              <Modal title="Editar usuário" onOpenModal={onOpenModal} selectedId={record.key} onConfirm={editSelectedUnit}>
                <Input size="large" placeholder="Nome" value={selectedUnit.unit} onChange={handleChangeSelectedUnit}/>
              </Modal>
              <Confirm title={`Excluir unidade ${record.unit}`} onConfirm={() => deleteSelectedUnit(record)}/>
            </div>
          )}
        />
      </Table>

    </UnitsContainer>
  )
}