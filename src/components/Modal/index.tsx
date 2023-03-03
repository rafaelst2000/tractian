import { ReactNode, useState } from 'react';
import { Modal as AntModal } from 'antd';
import { EditIcon } from './styles';
import { useTheme } from 'styled-components';

interface ModalProps{
  title: string
  children: ReactNode
}

export function Modal({ title, children }: ModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme()

  return (
    <>
      <EditIcon size={24} onClick={() => setModalOpen(true)} />
      <AntModal
        title={title}
        centered
        open={modalOpen}
        okText="Confirmar"
        cancelText="Cancelar"
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        okButtonProps={{color: theme.blue}}
      >
        {children}
      </AntModal>
    </>
  )
}