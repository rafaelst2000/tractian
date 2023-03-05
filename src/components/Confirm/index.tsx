import { Popconfirm } from 'antd'
import { RemoveIcon } from './styles'
import { useTheme } from 'styled-components'

interface ConfirmProps {
  title: string
  onConfirm: () => void
}

export function Confirm({ title, onConfirm }: ConfirmProps) {
  const theme = useTheme()

  function handleConfirm() {
    onConfirm()
  }

  return (
    <>
      <Popconfirm
        title={title}
        description="Tem certeza que deseja excluir?"
        onConfirm={handleConfirm}
        okText="Excluir"
        cancelText="Cancelar"
        okButtonProps={{ color: theme.red }}
      >
        <RemoveIcon size={24} />
      </Popconfirm>
    </>
  )
}
