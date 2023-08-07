/*eslint-disable*/
import React, { useState } from 'react';// layout for this page
import Admin from "layouts/Admin.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-dashboard/views/iconsStyle.js";
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Textarea, Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';

function Slide() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [files, setFiles] = useState([]);

    const form = useForm({
        initialValues: { image: '', description: '' },

        // // functions will be used to validate values at corresponding key
        // validate: {
        //     name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
        //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        //     age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
        // },
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
        const image = files.map((file, index) => {
            const imageUrl = URL.createObjectURL(file);
            return imageUrl
        });
        data = {
            ...data,
            image: image[0]
        }
        console.log("data", data)
    };

    return (
        <>
            <div className="px-9 mt-6 pb-40 h-screen overflow-auto">
                <div className="flex flex-col items-start w-full">
                    <div className="font-medium text-gray-700 text-xl flex flex-row space-x-4 items-center justify-between h-full w-full mb-6">
                        <div>Ajouter des images pour le slide</div>
                    </div>
                    <form onSubmit={form.onSubmit((values) => submitForm(values))}
                        className="flex flex-row space-x-4 items-start h-full w-full">
                        <div className="w-full">
                            <div className="flex flex-col justify-between bg-white px-28 py-10 shadow-xl rounded-md">
                                <div className="space-y-5">
                                    <div className="mb-8">
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
                                            {previews}
                                        </SimpleGrid>
                                    </div>
                                    <Textarea
                                        placeholder="Description"
                                        label="Description"
                                        minRows={6}
                                        maxRows={9}
                                        withAsterisk
                                        {...form.getInputProps('description')}
                                    />
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
                        </div>
                    </form >
                </div>
            </div>
        </>
    );
}

Slide.layout = Admin;

export default Slide;