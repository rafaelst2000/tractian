import { CompaniesContainer } from "./styles";
import { Table, Input, message } from 'antd';
import { Modal } from "../../components/Modal";
import { Confirm } from "../../components/Confirm";
import { useCompany } from "../../hooks/useCompany";
import { useState } from "react";
interface CompanyTableData {
  key: number
  id: number
  name: string
}

export function Companies() {
  const { companies, editCompany, deleteCompany } = useCompany()
  const [selectedCompany, setSelectedCompany] = useState<CompanyTableData>({} as CompanyTableData)
  const [messageApi, contextHolder] = message.useMessage();

  const tableData = companies.map(company => {
    return {
      key: company.id,
      ...company
    }
  }) as unknown as CompanyTableData[]

  function handleChangeSelectedCompany(event: React.ChangeEvent<HTMLInputElement>){
    const newCompany = {
      ...selectedCompany,
      name: event.target.value
    }
    setSelectedCompany(newCompany)
  }

  function onOpenModal(selectedId: number) {
    const selectedCompanyData = tableData.filter(company => company.key === selectedId)[0]
    setSelectedCompany(selectedCompanyData)
  }

  async function editSelectedCompany() {
    const companyToEdit = {
      id: selectedCompany.key,
      name: selectedCompany.name,
    }
    await editCompany(companyToEdit)

    messageApi.open({
      type: 'success',
      content: `Empresa ${companyToEdit.name} editada com sucesso!`,
    });
  }

  async function deleteSelectedCompany(selectedCompany: CompanyTableData) {
    await deleteCompany(selectedCompany.key)
    messageApi.open({
      type: 'success',
      content: `Empresa ${selectedCompany.name} removida com sucesso!`,
    });
  }

  return(
    <CompaniesContainer>
      {contextHolder}
      <Table dataSource={tableData}>
        <Table.Column title="Empresa" dataIndex="name" key="name" />
        <Table.Column
          width={'80px'}
          fixed="right"
          title=""
          key="action"
          render={(_: any, record: any) => (
             <div>
              <Modal title="Editar empresa" onOpenModal={() => onOpenModal(record.key)} onConfirm={editSelectedCompany}>
                <Input size="large" placeholder="Nome" value={selectedCompany.name} onChange={handleChangeSelectedCompany}/>
              </Modal>
              <Confirm title={`Excluir unidade ${record.name}`} onConfirm={() => deleteSelectedCompany(record)}/>
           </div>
          )}
        />
      </Table>

    </CompaniesContainer>
  )
}