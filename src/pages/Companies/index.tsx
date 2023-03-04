import { CompaniesContainer } from "./styles";
import { Table, Input } from 'antd';
import { Modal } from "../../components/Modal";
import { Confirm } from "../../components/Confirm";

const dataSource = [
  {
    key: '1',
    company: "Empresa 1",
  },
];

export function Companies() {
  return(
    <CompaniesContainer>
      <Table dataSource={dataSource}>
        <Table.Column title="Company" dataIndex="company" key="company" />
        <Table.Column
          width={'80px'}
          fixed="right"
          title=""
          key="action"
          render={(_: any, record: any) => (
             <div>
             <Modal title="Editar usuário">
               <Input size="large" placeholder="Nome" />
             </Modal>
             <Confirm title="Excluir empresa XXX" />
           </div>
          )}
        />
      </Table>

    </CompaniesContainer>
  )
}