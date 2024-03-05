import {React,useState} from "react";
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

var _gst = 0.09
var _svc = 0.1

function calculateTotals(items,isGST,isSVC){
    const subtotal = items.reduce((sum,item)=>sum + item.price,0)
    const svc = _svc * subtotal * isSVC
    const gst = _gst *(subtotal + svc) * isGST;
    return {
        subtotal:subtotal,
        total: subtotal+svc+gst
    }
}

export default function ItemsList({
    friends,
    items,
    calc,
    dispatch,
    nextStep,
    prevStep,
}) {
    const [GST,setGST] = useState(true);
    const [SVC,setSVC] = useState(true);

    const {subtotal,total} = calculateTotals(items,GST,SVC);

    return (
        <>
        {console.log("ITEMSINPUTLIST:",{items,friends},"GST",GST,"SVC",SVC)}
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
                    <Checkbox isChecked={GST} onChange={(e) => setGST(e.target.checked) }>GST</Checkbox>
                    </GridItem>

                    <GridItem colSpan={2} rowSpan={2}>
                        <TableContainer>
                            <Table>
                                <Tbody>
                                    <Tr>
                                        <Td>SubTotal</Td>
                                        <Td>${subtotal.toFixed(2)}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Total:</Td>
                                        <Td>${total.toFixed(2)}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <Checkbox isChecked={SVC} onChange={(e) => setSVC(e.target.checked) }>Service Charge</Checkbox>
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
