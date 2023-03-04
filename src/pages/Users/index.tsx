import { UsersContainer } from "./styles";
import { Table, Input, message } from 'antd';
import { Modal } from "../../components/Modal";
import { Confirm } from "../../components/Confirm";
import { useUser } from "../../hooks/useUser";
import { useState } from "react";
import { User } from "../../@types";
import { useCompany } from "../../hooks/useCompany";
import { useUnit } from "../../hooks/useUnit";

interface UserTableData extends User {
  key: number
  company: string
  unit: string
  name: string
  email: string
}

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
  const { users, editUser, deleteUser } = useUser()
  const { getCompanyNameById } = useCompany()
  const { getUnitNameById } = useUnit()
  const [selectedUser, setSelectedUser] = useState<UserTableData>({} as UserTableData)
  const [messageApi, contextHolder] = message.useMessage();

  const tableData = users.map(user => {
    return {
      ...user,
      company: getCompanyNameById(user.companyId),
      unit: getUnitNameById(user.unitId),
      key: user.id,
    }
  }) as unknown as UserTableData[]

  function handleChangeSelectedUserName(event: React.ChangeEvent<HTMLInputElement>){
    const newUser = {
      ...selectedUser,
      name: event.target.value
    }
    setSelectedUser(newUser)
  }

  function handleChangeSelectedUserEmail(event: React.ChangeEvent<HTMLInputElement>){
    const newUser = {
      ...selectedUser,
      email: event.target.value
    }
    setSelectedUser(newUser)
  }

  function onOpenModal(selectedId: number) {
    const selectedUserData = tableData.filter(unit => unit.key === selectedId)[0]
    setSelectedUser(selectedUserData)
  }

  async function editSelectedUser() {
    await editUser(selectedUser)

    messageApi.open({
      type: 'success',
      content: `Usuário ${selectedUser.name} editado com sucesso!`,
    });
  }

  async function deleteSelectedUser(selectedUser: UserTableData) {
    await deleteUser(selectedUser.key)
    messageApi.open({
      type: 'success',
      content: `Usuário ${selectedUser.name} removido com sucesso!`,
    });
  }

  return(
    <UsersContainer>
      {contextHolder}
      {tableData &&   
      <Table dataSource={tableData}>
        <Table.Column title="Nome" dataIndex="name" key="name" />
        <Table.Column title="Email" dataIndex="email" key="email" />
        <Table.Column title="Empresa" dataIndex="company" key="company" />
        <Table.Column title="Unidade" dataIndex="unit" key="unit" />
        <Table.Column
          width={'80px'}
          fixed="right"
          title=""
          key="action"
          render={(_: any, record: any) => (
             <div>
             <Modal title="Editar usuário" onOpenModal={() => onOpenModal(record.key)} onConfirm={editSelectedUser}>
               <Input size="large" placeholder="Nome" value={selectedUser.name} onChange={handleChangeSelectedUserName} />
               <Input style={{ marginTop: '0.5rem'}} size="large" placeholder="Email" type="email" value={selectedUser.email} onChange={handleChangeSelectedUserEmail} />
             </Modal>
             <Confirm title={`Excluir usuário ${record.name}?`} onConfirm={() => deleteSelectedUser(record)}/>
           </div>
          )}
        />
      </Table>
      }

    </UsersContainer>
  )
}