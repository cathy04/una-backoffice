/*eslint-disable*/
import React, { useState } from "react";
// layout for this page
import Admin from "layouts/Admin.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-dashboard/views/iconsStyle.js";
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Textarea, Text, Image, SimpleGrid, Title, Select } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { notifications } from '@mantine/notifications';
import { Notifications } from '@mantine/notifications';

// import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

import { DateInput } from '@mantine/dates';
import { useToggle } from '@mantine/hooks';
import AddCategories from './components/AddCategories';
import { Loading } from 'components/icons';
import { showNotification } from '@mantine/notifications';

function AddPost() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [categories, setCategories] = React.useState([
    { value: 'add', label: 'Ajouter' },
  ]);

  const [addingFeaturedImage, setAddingFeaturedImage] = useToggle();
  const [savingPost, setSavingPost] = useToggle();
  const [isOpenAddCategoryModal, setIsOpenAddCategoryModal] = useToggle();
  const [editorContent, setEditorContent] = useState('');
  const [files, setFiles] = useState([]);
  const editor = useEditor({
      extensions: [
          StarterKit,
          Underline,
          Link,
          Superscript,
          SubScript,
          Highlight,
          TextAlign.configure({ types: ['heading', 'paragraph'] }),
      ],
      content: editorContent,
  });
  const postForm = useForm({
    initialValues: {
      post_type: 'ARTICLE',
      feature_image: '',
      title: '',
      category: '',
      content: '',
      description: '',
      visibility: '',
      published_at: '',
    },
    validate: (values) => {
      return {
        // category:
        //   values.category === ''
        //     ? 'Veuillez sélectionner ou ajouter une catégorie.'
        //     : null,
        // content:
        //   values.content === ''
        //     ? "Veuillez ajouter le contenu de l'article"
        //     : null,
        description:
          values.description === '' ? 'Veuillez ajouter une description' : null,
        title: values.title === '' ? 'Veuillez ajouter un titre' : null,
        published_at: values.published_at === '' ? 'Veuillez ajouter une date' : null,

      };
    },
  });

  const onCategorySelected = (category) => {
    if (category === 'add') return setIsOpenAddCategoryModal();
    postForm.setFieldValue('category', category);
  };

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
        <Image
            key={index}
            src={imageUrl}
            imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
        />
    );
  });

  const submitForm = (data) => {
    const editorContent = editor.getHTML(); // Obtenir le contenu actuel de l'éditeur
    const strippedContent = editorContent.replace(/<\/?[^>]+(>|$)/g, '');
    if (strippedContent.trim() === '') {
      notifications.show({
        title: 'Pas de contenu',
        autoClose: 2500,
        message: "Vous ne pouvez pas ajouter l'article' sans contenu.",
        color: 'red',
      });
      return;
    }

    setEditorContent(editorContent); 
    const image = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return imageUrl
    });
    data = {
        ...data,
        feature_image: image[0],
        content: editorContent
    }
    console.log("data", data)
    form.reset()
};

  return (
    <>
      <div className="px-9 mt-6 pb-40">
        <div className="flex flex-col items-start w-full">
          <div className="mb-8 -ml-4 hover:ml-0 mt-6 transition-all duration-150 sticky top-0">
            <a href="/admin/posts">
              <Button
                className=""
              >
                Retour
              </Button>
            </a>
          </div>
          <Title order={3} className="mb-8">
            Ajouter une article
          </Title>
          <div className="font-medium text-gray-700 text-xl flex flex-row space-x-4 items-center justify-between h-full w-full mb-6">
            <div>Contenu</div>

            <div className="max-w-xs w-full">Détails</div>
          </div>
          <form
            onSubmit={postForm.onSubmit((values) => submitForm(values))}
            className="flex flex-row space-x-4 items-start h-full w-full"
          >
            <div className="w-full h-full min-h-full">
              <RichTextEditor editor={editor} stickyOffset={0} style={{ minHeight: '600px', backgroundColor: "white" }} >
                <RichTextEditor.Toolbar sticky >
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Bold />
                        <RichTextEditor.Italic />
                        <RichTextEditor.Underline />
                        <RichTextEditor.Strikethrough />
                        <RichTextEditor.ClearFormatting />
                        <RichTextEditor.Highlight />
                        <RichTextEditor.Code />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.H1 />
                        <RichTextEditor.H2 />
                        <RichTextEditor.H3 />
                        <RichTextEditor.H4 />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Blockquote />
                        <RichTextEditor.Hr />
                        <RichTextEditor.BulletList />
                        <RichTextEditor.OrderedList />
                        <RichTextEditor.Subscript />
                        <RichTextEditor.Superscript />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Link />
                        <RichTextEditor.Unlink />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.AlignLeft />
                        <RichTextEditor.AlignCenter />
                        <RichTextEditor.AlignJustify />
                        <RichTextEditor.AlignRight />
                    </RichTextEditor.ControlsGroup>
                  </RichTextEditor.Toolbar>
                <RichTextEditor.Content />
              </RichTextEditor>
            </div>
            <div className="max-w-xs w-full">
              <div className="flex flex-col justify-between bg-white p-6 shadow-lg rounded-md">
                <div className="space-y-5">
                  <TextInput
                    withAsterisk
                    placeholder="Titre"
                    label="Titre"
                    className="border-gray-400"
                    {...postForm.getInputProps('title')}
                  />
                  <Textarea
                    withAsterisk
                    placeholder="Your comment"
                    className="border-black rounded-none"
                    label="Description"
                    {...postForm.getInputProps('description')}
                  />
                  <DateInput
                    {...postForm.getInputProps('published_at')}
                    label="Date de publication"
                    placeholder="Date"
                    withAsterisk
                  />
                  
                  <Select
                    label="Categories"
                    data={categories}
                    className="border-black rounded-none"
                    {...{
                      ...postForm.getInputProps('category'),
                      onChange: onCategorySelected,
                    }}
                  />
                  <Select
                    label="Etat"
                    data={['PUBLISHED', 'DRAFT']}
                    {...postForm.getInputProps('visibility')}
                  />
                  <div>
                    <Dropzone
                        accept={IMAGE_MIME_TYPE}
                        onDrop={setFiles}
                    >
                        <Text align="center">Drop images here</Text>
                    </Dropzone>

                    <SimpleGrid
                      cols={4}
                      breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                      mt={previews.length > 0 ? 'xl' : 0}
                    >
                        {/* {previews} */}
                    </SimpleGrid>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Button
                  type="submit"
                  fullWidth
                  loading={savingPost}
                  className=" "
                >
                  <span>Enrégistrer</span>
                </Button>
              </div>
            </div>
          </form>

          <AddCategories
            isOpen={isOpenAddCategoryModal}
            onClose={() => setIsOpenAddCategoryModal()}
            setCategories={setCategories}
            onCategorySelected={(selectedValue) =>
              postForm.setFieldValue('category', selectedValue)
            }
          />
        </div>
      </div>
      <Notifications />
    </>
  );
}

AddPost.layout = Admin;

export default AddPost;
