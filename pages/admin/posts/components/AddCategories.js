import React from 'react';
import { Modal, Group, TextInput, Textarea, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle } from '@mantine/hooks';


function AddCategories({ isOpen, onClose, setCategories, onCategorySelected }) {
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      accent_color: '#000',
    },
  });
  const [loading, setLoading] = useToggle();
  const _onSubmit = (values) => {
    setLoading();
    const slug = values.name.split(' ').join('_');
    const metaDescription = values.description;
    const metaTitle = values.name;

    const category = {
      ...values,
      slug,
      meta_description: metaDescription,
      meta_title: metaTitle,
    };
  };

  return (
    <Modal opened={isOpen} onClose={onClose} title="Ajouter une categorie">
      <form
        onSubmit={form.onSubmit((values) => _onSubmit(values))}
        className="space-y-4"
      >
        <TextInput
          withAsterisk
          required
          label="Titre"
          placeholder=""
          {...form.getInputProps('name')}
        />

        <Textarea
        required
          label="Description"
          {...form.getInputProps('description')}
          withAsterisk
        />
        <Group position="center" mt="md">
          <Button
            loading={loading}
            type="submit"
            fullWidth
            className=""
          >
            ENREGISTRER
          </Button>
        </Group>
      </form>
    </Modal>
  );
}

export default AddCategories;
