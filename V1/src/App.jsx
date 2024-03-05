import { ChakraProvider,Container,Button } from "@chakra-ui/react";
import NavStepper from "./components/NavStepper";

import Landing from "./components/Landing";
import FriendInput from "./components/FriendInput";
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import ItemsList from "./components/ItemsList";
import PaidInput from "./components/PaidInput"

import {useReducer,useState } from 'react';

const initialData = { friends:[],items:[],calc:{gst:0,svc:0,subtotal:0, total:0}}
const fakeData = {friends: [{name:"Andy"}, {name:"Bob"}, {name:"Chris"}],
items:[
  { name: "Dish One", price: 7.99, split: [0.25, 0.5, 0.25] },
  { name: "Dish Two", price: 8.99, split: [0.25, 0.5, 0] },
  { name: "Dish Three", price: 9.99, split: [0.5, 0, 0.5] },
]}
;

function reducer(state, action) {
  switch(action.type){
    case 'ADD_FRIEND' : {
      let updatedFriends = [...state.friends]
      updatedFriends.push({name:action.payload});
      return { ...state, friends: updatedFriends};
    }
    case 'DEL_FRIEND' : {
      let updatedFriends = [...state.friends];
      updatedFriends.splice(action.payload, 1);
      return { ...state, friends: updatedFriends};
    }
    case 'EDIT_PAID' : {
      let updatePaid = [...state.friends];
      updatePaid[action.payload.index].paid = action.payload.paid;
      return { ...state, friends: updatePaid};
    }
    case 'ADD_ITEM' : {
      let newCalc = {...state.calc,
        total:state.items.reduce((sum,item)=>sum + item.price,0)
      }
      return { ...state, items: [...state.items, action.payload],};
    }
    case 'DELETE_ITEM' :{
      let newItems = [...state.items];
      newItems.splice(action.payload, 1);
      return { ...state, items: newItems}
    }
    default:
      throw new Error("Unknown action");
    }
  }

function App() {
    const [{friends,items,calc},dispatch] = useReducer(reducer, initialData)
    const [activeStep,setActiveStep] = useState(-1)

    function nextStep(){
      setActiveStep(activeStep+1)
    }

    function prevStep(){
      setActiveStep(activeStep-1)
    }
    
    return (
        <ChakraProvider>
                  {console.log({friends,items,calc})}
            <Container width="auto" maxWidth='1280px' height="100vh" padding='1rem'> 
            <NavStepper activeStep={activeStep}></NavStepper>
            <BrowserRouter>
            <Routes>
            <Route index element={<Landing nextStep={nextStep}/>} />
            <Route path="friendinput" element={<FriendInput friends={friends} dispatch={dispatch} nextStep={nextStep} prevStep={prevStep}  />}/> 
            <Route path="iteminput" element={<ItemsList items={items} friends={friends} calc={calc} dispatch={dispatch} nextStep={nextStep} prevStep={prevStep} />} />  
            <Route path="paidinput" element={<PaidInput items={items} friends={friends} dispatch={dispatch} nextStep={nextStep} prevStep={prevStep} />} />      
            </Routes>
            </BrowserRouter>
              </Container>
        </ChakraProvider>
    );
}

export default App;
