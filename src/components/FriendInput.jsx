import {
    Input,
    Box,
    Button,
    Flex,
    Divider,
    Text,
    IconButton,
    Heading,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { DeleteIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function FriendInput({friends,dispatch,nextStep,prevStep}) {
    const [name, setName] = useState("");

    function handleAddFriend() {
        dispatch({type:"ADD_FRIEND",payload:name})
        setName("");
    }

    return (
        <Box>
            <Heading as="h3" size="lg">
                Who&apos;s Sharing?
            </Heading>
            {friends.map((friend, index) => (
                <Box key={index} p="4px">
                    <Flex justify="space-between" alignItems="center">
                        <Text fontSize="md">{friend.name}</Text>
                        <IconButton
                            variant="outline"
                            aria-label="Delete from List"
                            icon={<DeleteIcon />}
                            onClick={() => dispatch({type:"DEL_FRIEND",payload:index})
                        }
                        />
                    </Flex>
                    <Divider />
                </Box>
            ))}
            <Input
                placeholder="Key In Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Flex justify="right" width="100%">
                <Button
                    rightIcon={<AddIcon />}
                    variant="outline"
                    onClick={handleAddFriend}
                >
                    Add Friend
                </Button>
            </Flex>

            <Flex justify="right" width="100%">
                <Link to="/iteminput">
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme="blue"
                        variant="outline"
                        onClick={nextStep}
                    >
                        Next
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
}