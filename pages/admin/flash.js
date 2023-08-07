/*eslint-disable*/
import React from "react";
// layout for this page
import Admin from "layouts/Admin.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-dashboard/views/iconsStyle.js";
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Textarea, Text, Image, SimpleGrid } from '@mantine/core';

function Flash() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const form = useForm({
        initialValues: { title: '', description: '' },

        // functions will be used to validate values at corresponding key
        validate: {
            title: (value) => (value.length < 2 ? 'Title must have at least 2 letters' : null),
            description: (value) => (value.length < 2 ? 'Description must have at least 2 letters' : null),
        },
    });
    const submitForm = (data) => {
        console.log("data", data)
    };
    return (
        <>
            <div className="px-9 mt-6 pb-40 h-screen overflow-auto">
                <div className="flex flex-col items-start w-full">
                    <div className="font-medium text-gray-700 text-xl flex flex-row space-x-4 items-center justify-between h-full w-full mb-6">
                        <div>Ajouter un flash info</div>
                    </div>
                    <form onSubmit={form.onSubmit((values) => submitForm(values))}
                        className="flex flex-row space-x-4 items-start h-full w-full">
                        <div className="w-full">
                            <div className="flex flex-col justify-between bg-white px-28 py-10 shadow-xl rounded-md">
                                <div className="space-y-5">
                                    <TextInput
                                        placeholder="Title"
                                        label="Title"
                                        withAsterisk
                                        {...form.getInputProps('title')}
                                    />
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

Flash.layout = Admin;

export default Flash;