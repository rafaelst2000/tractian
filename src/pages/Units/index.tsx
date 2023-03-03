import { UnitsContainer } from "./styles";
import { Table, Input } from 'antd';
import { Modal } from "../../components/Modal";
import { Confirm } from "../../components/Confirm";

const dataSource = [
  {
    key: '1',
    unity: 'Jaguar Unit',
    company: "Empresa 1",
  },
  {
    key: '2',
    unity: 'Jaguar Unit 2',
    company: "Empresa 1",
  },
];

export function Units() {
  return(
    <UnitsContainer>
      <Table dataSource={dataSource}>
        <Table.Column title="Unity" dataIndex="unity" key="unity" />
        <Table.Column title="Company" dataIndex="company" key="company" />
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
              <Confirm title="Excluir unidade XXX" />
            </div>
          )}
        />
      </Table>

    </UnitsContainer>
  )
}