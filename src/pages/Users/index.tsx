import { UsersContainer } from "./styles";
import { Table, Input } from 'antd';
import { Modal } from "../../components/Modal";
import { Confirm } from "../../components/Confirm";

const dataSource = [
  {
    key: '1',
    name: 'Rafael',
    email: 'rafaelst2000@gmail.com',
    company: "Empresa 1",
    unit: 'Unidade 1'
  },
];

export function Users() {
  return(
    <UsersContainer>
      <Table dataSource={dataSource}>
        <Table.Column title="Nome" dataIndex="name" key="name" />
        <Table.Column title="Email" dataIndex="email" key="email" />
        <Table.Column title="Empresa" dataIndex="company" key="company" />
        <Table.Column title="Unidade" dataIndex="unit" key="unit" />
        <Table.Column
          width={'5%'}
          fixed="right"
          title=""
          key="action"
          render={(_: any, record: any) => (
             <div>
             <Modal title="Editar usuário">
               <Input size="large" placeholder="Nome" />
             </Modal>
             <Confirm title="Excluir usuário XXX" />
           </div>
          )}
        />
      </Table>

    </UsersContainer>
  )
}