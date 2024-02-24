import React from "react";
import Item from "./Item";
import ItemInput from "./ItemInput";
import { Accordion, Heading, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import {
    Checkbox,
    Box,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Grid,
    GridItem,
} from "@chakra-ui/react";

export default function ItemsList({
    friends,
    items,
    calc,
    dispatch,
    nextStep,
    prevStep,
}) {
    return (
        <>
            <Heading as="h3" size="lg">
                Who Ordered What?
            </Heading>
            <Accordion>
                {items.map((item, index) => (
                    <Item
                        item={item}
                        key={index}
                        handleDelete={() =>
                            dispatch({ type: "DELETE_ITEM", payload: index })
                        }
                    />
                ))}
            </Accordion>

            <ItemInput
                addItem={(newItem) =>
                    dispatch({ type: "ADD_ITEM", payload: newItem })
                }
                friends={friends}
            ></ItemInput>

            <Box p="2" borderWidth="1px" borderRadius="lg">
                <Grid
                    templateColumns="repeat(3, 1fr)"
                    templateRows="repeat(2, 1fr)"

                >
                    <GridItem colSpan={1}>
                            <Checkbox defaultChecked>GST</Checkbox>
                    </GridItem>

                    <GridItem colSpan={2} rowSpan={2}>
                        <TableContainer>
                            <Table>
                                <Tbody>
                                    <Tr>
                                        <Td>SubTotal</Td>
                                        <Td>$0000.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Total:</Td>
                                        <Td>$0000.00</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <Checkbox defaultChecked>Service Charge</Checkbox>
                    </GridItem>
                </Grid>
            </Box>

            <Flex justify={"space-between"} width="100%">
                <Link to="/friendinput">
                    <Button
                        leftIcon={<ArrowBackIcon />}
                        variant="outline"
                        onClick={prevStep}
                    >
                        Back
                    </Button>
                </Link>
                <Link to="/paidinput">
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        variant="outline"
                        onClick={nextStep}
                    >
                        Next
                    </Button>
                </Link>
            </Flex>
        </>
    );
}
