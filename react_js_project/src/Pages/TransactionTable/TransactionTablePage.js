import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import TransactionHistoryTable from "./TransactionHistoryTable";
import ScheduledTransactions from "./ScheduledTransactions";

import styled from 'styled-components';

const PageCard = styled(Card)`
  width: 90vw;
  height: 60vh;
`

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const TransactionTablePage = ({

}) => {
  const [selectedTab, setSelectedTab] = useState()
  const navigate = useNavigate()

  const checkIfUserIsLoggedIn =()=>{
      let tempLoggedInUserId = localStorage.getItem("loggedInUserID");
      if(tempLoggedInUserId){
          console.log("Pass user auth check");
          return true;
      }
      else{
          console.log("Fail user auth check");
          return false;
      }
  }

  useEffect(()=>{
    if(!checkIfUserIsLoggedIn()){
        console.log("Failed user is login check");
        return navigate('/login');
    }
  },[])

  const onClickSelectedTab = e => {
    e.preventDefault();
    setSelectedTab(e.currentTarget.id)
  }

  return (
    <>
      <PageContainer>
      <PageCard>
        <Card.Body>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Transaction History">
              <TransactionHistoryTable/>
            </Tab>
            <Tab eventKey="profile" title="Scheduled Transactions">
              <ScheduledTransactions/>
            </Tab>
          </Tabs>    
        </Card.Body>
      </PageCard>
      </PageContainer>
    </>
  )
}

export default TransactionTablePage;
