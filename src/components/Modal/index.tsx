import { ReactNode, useState } from 'react'
import { Modal as AntModal } from 'antd'
import { EditIcon } from './styles'
import { useTheme } from 'styled-components'

interface ModalProps {
  title: string
  children: ReactNode
  onOpenModal: () => void
  onConfirm: () => void
}

export function Modal({ title, children, onOpenModal, onConfirm }: ModalProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const theme = useTheme()

  function openModal() {
    setModalOpen(true)
    onOpenModal()
  }

  function handleConfirm() {
    setModalOpen(false)
    onConfirm()
  }

  return (
    <>
      <EditIcon size={24} onClick={openModal} />
      <AntModal
        title={title}
        centered
        open={modalOpen}
        okText="Confirmar"
        cancelText="Cancelar"
        onOk={handleConfirm}
        onCancel={() => setModalOpen(false)}
        okButtonProps={{ color: theme.blue }}
      >
        {children}
      </AntModal>
    </>
  )
}
