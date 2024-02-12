import React from "react";
import Item from "./Item";
import ItemInput from "./ItemInput";
import {
    Accordion,
    Heading,
    Flex,
    Spacer,
    Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useState } from "react";

const fakeItems = [
    { name: "Dish One", price: 7.99, split: [0.25, 0.5, 0.25] },
    { name: "Dish Two", price: 8.99, split: [0.25, 0.5, 0] },
    { name: "Dish Three", price: 9.99, split: [0.5, 0, 0.5] },
];

export default function ItemsList() {
    const [items, setItems] = useState(fakeItems);

    function addItem(newItem){
        setItems((items) => [...items, newItem]); 
        
    }

    function handleDelete(index) {
        let newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    return (
        <>
            <Heading as="h3" size="lg">
                Who Ordered What?
            </Heading>
            <Accordion >
                {items.map((item, index) => (
                    <Item item={item} key={index} handleDelete={()=>handleDelete(index)} />
                ))}
            </Accordion>

            <ItemInput addItem={addItem}></ItemInput>
            <Flex justify={"space-between"} width="100%">
            <Link to="/friendinput">
                    <Button
                        leftIcon={<ArrowBackIcon />}
                        variant="outline"
                    >
                        Back
                    </Button>
                </Link>
                <Link to="/iteminput">
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        variant="outline"
                    >
                        Next
                    </Button>
                </Link>
            </Flex>
        </>
    );
}
