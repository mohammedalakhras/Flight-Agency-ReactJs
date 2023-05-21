import { useState } from 'react';
import NumberOf from './NumberOfPerson/NumberOfPerson';
import DetailsOfMultiplePerson from './DetailsOfMultiplePerson/DetailsOfMultiplePerson';
import React, { Component } from 'react';
export default function DetailsOfPerson(props) {
  const [NumberOfPerson, setNumberOfPerson] = useState({
    state: true,
    value: 0,
  });
  if (NumberOfPerson.state == false && NumberOfPerson.value == 0) {
    props.setFinish(true);
  }

  return (
    <>
      {NumberOfPerson.state && <NumberOf state={setNumberOfPerson} />}
      {NumberOfPerson.value > 0 && (
        <DetailsOfMultiplePerson
          NumberOfperson={NumberOfPerson.value}
          setNumberOfPerson={setNumberOfPerson}
        />
      )}
    </>
  );
}
