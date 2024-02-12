import React from "react";
import PropTypes from "prop-types";
import {
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Input,
    IconButton,
    Flex,
    Spacer,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    InputLeftElement,
    InputGroup,
    Center
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";

const ItemType = PropTypes.shape({
    name: PropTypes.string, //isRequired?
    price: PropTypes.number,
    split: PropTypes.arrayOf(PropTypes.number),
});

Item.propTypes = {
    item: ItemType,
    handleDelete: PropTypes.func,

};

export default function Item({item,handleDelete}) {
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [split, setSplit] = useState(item.split);
    return (
        <AccordionItem>
                <AccordionButton>
                    <DeleteIcon mr="12px" onClick={handleDelete}/>
                    <Flex  gap="1" width="100%">
                        <Center flex="2">
                        <Input variant="unstyled" value={name}
                        onChange={(e) => setName(e.target.value)} size="lg"   />
                        
                        </Center>
                        <Center>
                        <InputGroup>
                        <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                            >
                                $
                            </InputLeftElement>
                            <Input variant="flushed" value={price}
                            onChange={(e) => setPrice(e.target.value)} maxWidth="7em"/>
                        </InputGroup>
                        </Center>
                    </Flex>
                    <AccordionIcon />
                </AccordionButton>
            <AccordionPanel pb={4}>
                <TableContainer>
                    <Table size="sm">
                        <Thead>
                            <Tr>
                                <Th>Friend</Th>
                                <Th isNumeric>Share</Th>
                                <Th isNumeric>Amount</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
{item.split.map((share,index) => (
      <Tr key={index}>
      <Td>Friend</Td>
      <Td isNumeric>{share}</Td>
      <Td isNumeric>${share*price}</Td>
    </Tr>


))}
      </Tbody>
                    </Table>
                </TableContainer>
            </AccordionPanel>
        </AccordionItem>
    );
}
