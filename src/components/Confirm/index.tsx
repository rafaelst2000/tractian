import { Popconfirm } from 'antd';
import { RemoveIcon } from './styles';
import { useTheme } from 'styled-components';

interface ConfirmProps {
  title: string
}

export function Confirm({ title }: ConfirmProps) {
  const theme = useTheme()

  return (
    <>
      <Popconfirm
        title={title}
        description="Tem certeza que deseja excluir?"
        onConfirm={() => {}}
        okText="Excluir"
        cancelText="Cancelar"
        okButtonProps={{color: theme.red}}
      >
        <RemoveIcon size={24} />
      </Popconfirm>
    </>
  )
}