import React, { useState } from 'react';
import Discover from '../Component/discover/discover';
import FlightDetils from '../Component/Flight/FlightDetils';
import MainFileForDetails from './DetailsOfperson/MainFileForDetails';
import NumberOfTicket from './NumberOfTicket/NumberOfTicket';
// import About from '../Component/aboutUs/aboutus';
export default function Home() {
  const [datafromserver, setdatafromserver] = useState({});
  const [visabilityOfFlight, setvisabilityOfFlight] = useState(true);
  const [DetailsOfPersonsCom, setDetailsOfPersonsCom] = useState(true);
  const [finishDetails, setFinishDetails] = useState(false);
  return (
    <div>
      {visabilityOfFlight && (
        <Discover state={setvisabilityOfFlight} setData={setdatafromserver} />
      )}
      {DetailsOfPersonsCom && !visabilityOfFlight && (
        <FlightDetils setDetailsOfPerson={setDetailsOfPersonsCom} />
      )}
      {!finishDetails && !DetailsOfPersonsCom && (
        <MainFileForDetails setFinish={setFinishDetails} />
      )}
      {finishDetails && <NumberOfTicket />}
    </div>
  );
}
