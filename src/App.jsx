import { ChakraProvider,Container,Button } from "@chakra-ui/react";
import NavStepper from "./components/NavStepper";

import Landing from "./components/Landing";
import FriendInput from "./components/FriendInput";
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import ItemsList from "./components/ItemsList";

function App() {
    return (
        <ChakraProvider>
            <Container width="auto" maxWidth='1280px' height="100vh" padding='1rem'> 
            <NavStepper></NavStepper>
            <BrowserRouter>
            <Routes>
            <Route index element={<Landing />} />
            <Route path="friendinput" element={<FriendInput />} /> 
            <Route path="iteminput" element={<ItemsList />} />    
            </Routes>
             
            </BrowserRouter>
              </Container>
              
        </ChakraProvider>
    );
}

export default App;
