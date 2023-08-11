import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

export default function ModalT({children,opened,title,close}) {
    
    return (
    <>
      <Modal.Root opened={opened} onClose={close} closeOnClickOutside={false}>
        <Modal.Overlay />
        <Modal.Content className="pt-4">
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}