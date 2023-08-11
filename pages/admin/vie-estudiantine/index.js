/*eslint-disable*/
import React, { useState } from "react";
// layout for this page
import Admin from "layouts/Admin.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-dashboard/views/iconsStyle.js";

import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Textarea, Text, Image, SimpleGrid, Title } from '@mantine/core';
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


function VieEstudiantine() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
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

    
    React.useEffect(() => {
        
    }, []);

    const form = useForm({
        initialValues: {
            name: '',
            description: '',
            information: '',
            image: '',
        },
        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            description: (value) => (value.length < 2 ? 'Title must have at least 2 letters' : null),
        },
    });

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
                message: "Le contenu ne doit pas etre vide.",
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
            image: image[0],
            information: editorContent
        }
        console.log("data", data)
        form.reset()
    };

    return (
        <>
            <div className="px-9 mt-6 pb-40">
                <div className="flex flex-col items-start w-full">
                    <Title order={3} className="mb-8">
                        VIE ESTIDIANTINE
                    </Title>
                    <div className="font-medium text-gray-700 text-xl flex flex-row space-x-4 items-center justify-between h-full w-full mb-6">
                        <div>Contenu</div>
                        <div className="max-w-xs w-full">Information</div>
                    </div>
                    <form
                        onSubmit={form.onSubmit((values) => submitForm(values))}
                        className="flex flex-row space-x-4 items-start h-full w-full"
                    >
                        <div className="w-full h-full min-h-full">
                            <RichTextEditor editor={editor} stickyOffset={0} style={{ minHeight: '400px', backgroundColor: "white" }} >
                                <RichTextEditor.Toolbar sticky>
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
                                        placeholder="Name"
                                        label="Name"
                                        withAsterisk
                                        {...form.getInputProps('name')}
                                    />
                                    <Textarea
                                        placeholder="Description"
                                        label="Description"
                                        withAsterisk
                                        minRows={4}
                                        {...form.getInputProps('description')}
                                    />
                                    <div className="mt-8">
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
                                        fullWidth
                                        // loading={savingDirector}
                                        type="submit"
                                        className=""
                                    >
                                        Enrégistrer
                                    </Button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
            <Notifications />
        </>
    );
}

VieEstudiantine.layout = Admin;

export default VieEstudiantine;