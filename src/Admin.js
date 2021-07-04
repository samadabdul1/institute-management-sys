import React from 'react'
import styled from 'styled-components';
import { Router,Switch,Route,Link } from "react-router-dom";
import {Tabs,Tab,AppBar,Typography,Box,Button,TextField ,Dialog,DialogActions,DialogContent ,DialogContentText,DialogTitle} from "@material-ui/core";
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import CustomizedDialogs from './component/Dialog'
import Invite from './Invite';
import {db} from './Firebase'
export default function Admin() {
    const [value, setValue] = React.useState(0)
    const handkeTabs=(e,value)=>{
        
        setValue(value)
    }
    const [members, setMembers] = React.useState([]);
    const getMembers=()=>{
        db.collection('members').onSnapshot((snapshot)=>{
        const tempItems=snapshot.docs.map((doc)=>({
            id: doc.id,
            member:doc.data()
        }))
        setMembers(tempItems);
        })
    }
    React.useEffect(() => {
        getMembers();
        
      }, [])
    return (
        <Container>
            <HomeButtonDiv>
                <Main>
                    <Header>
                        <Link to="/">
                                <HomeButton><HomeLogo src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png"/></HomeButton>
                        </Link>
                        <CustomizedDialogs>
                            <Invite/>
                        </CustomizedDialogs>
                    </Header>
                    <AppBar position="static" style={{backgroundColor:"black"}}>
                        <Tabs value={value} onChange={handkeTabs} orientation="vertical">
                            <Tab label="Institute Members"/>
                            <Tab label="Pending Invitations"/>
                        </Tabs>
                    </AppBar>
                </Main>
                
                {value===0 && <TabOne member={members}/>}
                {value===1 && <TabTwo/>}
            </HomeButtonDiv>
        
        </Container>
      );
}
    
    
const Container=styled.div`
    background-color:#FFF;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    flex-direction: row;
`
const HomeButton=styled.button`
    height: 50px;
    width: 50px;
    /* background-color:#0F1111; */
    border:none;
`
const HomeLogo=styled.img`
    height: 50px;

`
const HomeButtonDiv=styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: row;
`
const Header=styled.div`
    background-color:#FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`
const Main=styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
`
const SendInvite=styled.button`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    justify-content:center;
    align-items: center;
    height: 50px;
    width:100px;
    font-weight: 700;
    color: white;
    background-color: black;
`