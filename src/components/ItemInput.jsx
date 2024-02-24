import { React, useState } from "react";
import {
    Input,
    Flex,
    Box,
    Spacer,
    ButtonGroup,
    Button,
    Grid,
    GridItem,
    InputGroup,
    InputLeftElement,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot
} from "@chakra-ui/react";
import { PlusSquareIcon, EditIcon } from "@chakra-ui/icons";
import styles from "./ItemInput.module.css"
import PropTypes from "prop-types";


ItemInput.propTypes = {
    addItem: PropTypes.func,
};

export default function ItemInput({friends,addItem}) {


    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [split, setSplit] = useState(Array(friends.length).fill(1));

    function handleSplitChange(e,index){
        let newSplit = [...split];
        newSplit.splice(index, 1,+ e.target.value);
        setSplit(newSplit);
    }

    function handleEvenSplit(){
        let finalSplit=Array(friends.length).fill(1/split.length)
        addItem({name:name,price:price,split:finalSplit})
        resetInputs();
    }

    function handleAddSplit(){
        let finalSplit=split.map((share)=>share/split.length)
        onClose();
        addItem({name:name,price:price,split:finalSplit})
        resetInputs();
    }

    function resetInputs(){
        setName("");
        setPrice(0.0);
        setSplit(Array(friends.length).fill(1));
    }

    return (
        <>
            <Grid
                templateColumns="repeat(3, 1fr)"
                templateRows="repeat(2, 1fr)"
                gap="2"
            >
                <GridItem colSpan={2}>
                    <Input
                        placeholder="Key In Item Name"
                        w="100%"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <Button
                        rightIcon={<PlusSquareIcon />}
                        variant="outline"
                        w="100%"
                        onClick={handleEvenSplit}
                    >
                        Split Evenly
                    </Button>
                </GridItem>
                <GridItem colSpan={2}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            fontSize="1.2em"
                        >
                            $
                        </InputLeftElement>
                        <Input
                            placeholder="Key In Item Price"
                            w="100%"
                            value={price}
                            onChange={(e) => setPrice(+ e.target.value)}
                        />
                    </InputGroup>
                </GridItem>
                <GridItem colSpan={1}>
                    <Button
                        rightIcon={<EditIcon />}
                        variant="outline"
                        w="100%"
                        onClick={onOpen}
                    >
                        Split Manually
                    </Button>
                </GridItem>
            </Grid>

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Flex>
                            <Text mr="4px" minWidth="6em">
                                Splitting:
                            </Text>
                            <Input
                                placeholder="Key In Item Name"
                                w="100%"
                                variant="unstyled"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Flex>
                        <Flex>
                            <Text mr="4px" minWidth="6em">
                                Total Price: $
                            </Text>
                            <Input
                                placeholder="Key In Item Price"
                                w="100%"
                                variant="unstyled"
                                value={price}
                                onChange={(e) => setPrice(+e.target.value)}
                            />
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p="2">
                    <TableContainer p="2">
                            <Table size="md" className={styles.table_modal}>
                                <Thead>
                                    <Tr>
                                        <Th>Friend</Th>
                                        <Th>Edit Share:</Th>
                                        <Th>Amount</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {friends.map((friend, index) => (
                                        <Tr key={index}>
                                            <Td>{friend.name}</Td>
                                            <Td ><Input value={split[index]} onChange={(e)=>handleSplitChange(e,index)}/></Td>
                                            <Td isNumeric>${(split[index]/split.length*price).toFixed(2)}</Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th></Th>
                                        <Th>{split.reduce((sum,item)=>sum + item,0)}  / {split.length}</Th>
                                        <Th isNumeric>${split.reduce((sum,item)=>sum + item/split.length*price,0)}</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" onClick={onClose} mr={3}>
                            Close
                        </Button>
                        <Button colorScheme="blue" onClick={handleAddSplit} rightIcon={<PlusSquareIcon />}>
                            Add to Bill
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
