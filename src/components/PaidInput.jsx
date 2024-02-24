import { React, useState } from "react";
import {
    Heading,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot,
    Input,
    InputGroup,
    InputLeftElement,
    Flex,
    Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";



export default function ItemsList({items,friends,dispatch,nextStep,prevStep}) {

    return (
        <>
            <Heading as="h3" size="lg">
                Who Paid?
            </Heading>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th isNumeric>Paid</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {friends.map((friend, index) => (
                            <Tr key={index}>
                                <Td>{friend.name}</Td>
                                <Td>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                            fontSize="1.2em"
                                        >
                                            $
                                        </InputLeftElement>
                                        <Input
                                            onChange={(e) => dispatch({type:"EDIT_PAID",payload:{index:index,paid:+ e.target.value}})
                                        }/>
                                    </InputGroup>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Total Paid:</Th>
                            <Th isNumeric>$ {friends.reduce((a,i) => { return a+= i.paid? i.paid : 0},0).toFixed(2)}</Th>
                        </Tr>
                        <Tr>
                            <Th>Total Bill:</Th>
                            <Th isNumeric>$ 0.00</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <Flex justify={"space-between"} width="100%">
                <Link to="/iteminput">
                    <Button leftIcon={<ArrowBackIcon />} variant="outline" onClick={prevStep}>
                        Back
                    </Button>
                </Link>
                <Link to="/paidinput">
                    <Button rightIcon={<ArrowForwardIcon />} variant="outline" onClick={nextStep}>
                        Next
                    </Button>
                </Link>
            </Flex>
        </>
    );
}
