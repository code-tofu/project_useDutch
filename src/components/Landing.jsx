import { Box, Heading , Button
 } from "@chakra-ui/react";
 import { TimeIcon,ArrowForwardIcon } from '@chakra-ui/icons'
 import { Link } from "react-router-dom";

function Landing() {
    return (
        <Box  borderWidth='1px' borderRadius='lg' p="6px"  >
        <Heading as='h4' size='md' textAlign='left' mb='6px'>
        On an Outing?
        </Heading>
        
        <Link to="/friendinput"><Button rightIcon={<ArrowForwardIcon />} colorScheme='blue' variant='outline'> 
        New Bill </Button></Link>


        <Heading as='h4' size='md' textAlign='left' mb='6px' mt='6px'>
        Want To Check Past Bills?
        </Heading>

        <Button rightIcon={<TimeIcon/>} colorScheme='blue' variant='outline'> History</Button>

        </Box>
    );
}

export default Landing;
