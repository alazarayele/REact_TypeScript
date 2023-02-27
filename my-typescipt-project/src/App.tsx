import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import Input from './components/Input';
import { Container } from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import MutableRef from './components/ref/MutableRef';
import Counter from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';
function App() {
  const perosonName={
    first:'alazar',
    last:'wayne',
  }

  const nameList =[
    {first:'Bruce',last:'Wayne'},{first:'clark',last:'Kent'},{first:'princess',last:'Diana'}]
  
  return (
    <div className="App">
      
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label </Text>
      <CustomComponent name='alazar' isLoggedIn={true}></CustomComponent>
      <CustomButton variant='secondary'>Hibutton </CustomButton>
      <Toast position='left-center'/>
      <RandomNumber value={10} isPositive={true } ></RandomNumber>

      <List items={['Alazaar','Ayele','Gossaye']}
      onClick={(item) => console.log(item)}
      />



<List items={[1,2,3]}
      onClick={(item) => console.log(item)}
      />
  <Private isLoggedIn={false} Component={Profile}></Private>
         <Counter message='Thr Count Value is '/>
         <MutableRef></MutableRef>
      <UserContextProvider>
        <User></User>
      </UserContextProvider>
        <ThemeContextProvider>
      <Box></Box></ThemeContextProvider>
     <Greet name='alazar' messagCount={10} isLoggedIn={false }/>
    <Person name={perosonName} />
    <PersonList names={nameList} />
    <Status status='loading'/>
    <Heading>Placeholder text</Heading>
   <Oscar>
    <Heading>
      Oscar Goes to dicpario
    </Heading>
   </Oscar>
   <Button handleClick={(event,id) =>{
    console.log('Button Clicked',event,id)}}/>
    <Input value='' handleChange={(event) => console.log(event)}/>
    <Container styles={{border:'1px solid black',padding:'1rem'}}/>
   <LoggedIn/>
    </div>
  );
}

export default App;
