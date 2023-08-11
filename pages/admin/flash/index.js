/*eslint-disable*/
import React from "react";
// layout for this page
import Admin from "layouts/Admin.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-dashboard/views/iconsStyle.js";
import { useForm } from '@mantine/form';
import { TextInput, Button, Title, Textarea, Text, Image, SimpleGrid, Group, Card } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from "components/Modal/Modal.js"

function Flash() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [opened, { open, close }] = useDisclosure(false);

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
        form.reset()
        close()
    };
    return (
        <>
            <div className="px-9 mt-6 pb-40">
                <Title order={3} className="mb-8">
                    FLASH
                </Title>

                <div className="w-full flex flex-row items-center justify-between mb-10">
                    <div className="flex flex-row w-full justify-end items-center">
                        <Group position="center">
                            <Button className="uppercase text-white text-sm px-4 py-2" onClick={open}> Ajouter</Button>
                        </Group>
                    </div>
                </div>
                <div className="bg-whdite flex flex-col items-start md:mx-sauto md:dmt-28 w-full md:w-s2/3">
                    <div className="font-medium text-gray-700 psx-28 text-xl mflex flex-row space-x-4 items-center justify-between h-full w-full my-8">
                        <div className="grid grid-cols-3 gap-4">
                            {
                                [1,2,3,2,2,2].map((item,index) => (
                                    <div className="">
                                        <Card
                                            shadow="sm"
                                            padding="xl"
                                            >
                                            <Text weight={500} size="lg" mt="md">
                                                Flash info
                                            </Text>

                                            <Text mt="xs" color="dimmed" size="sm">
                                                Please click anywhere on this card to claim your reward, this is not a fraud, trust us
                                            </Text>
                                            <div className="text-black mt-8 space-x-3 flex flex-row">
                                                <button
                                                    title="Éditer"
                                                    // onClick={() => onNavigateToPostDetails(post)}
                                                    className="shadow bg-white w-10 h-10  flex items-center justify-center"
                                                >
                                                    <EditIcon className="w-5 h-5" />
                                                </button>
                                                <button
                                                    title="Supprimer"
                                                    // onClick={() => onNavigateToPostDetails(post)}
                                                    className="shadow bg-white w-10 h-10 text-red-600 flex items-center justify-center"
                                                >
                                                    <DeleteIcon className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
            <Modal opened={opened} onClose={close} title="Ajouter un flash info">
                <form onSubmit={form.onSubmit((values) => submitForm(values))}
                    className="flex flex-row space-x-4 items-start h-full w-full">
                    <div className="w-full">
                        <div className="flex flex-col justify-between rounded-md">
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
                            <div className="flex justify-center space-x-8">
                                <div className="my-5">
                                    <Button
                                        fullWidth
                                        // loading={savingDirector}
                                        type="submit"
                                        className=""
                                    >
                                        Enrégistrer
                                    </Button>
                                </div>
                                <div className="mt-5">
                                    <Button
                                        fullWidth
                                        // loading={savingDirector}
                                        type="button"
                                        className="bg-red-700 hover:bg-red-600"
                                        onClick = {close}
                                    >
                                        Annuler
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </Modal>
        </>
    );
}

Flash.layout = Admin;

export default Flash;