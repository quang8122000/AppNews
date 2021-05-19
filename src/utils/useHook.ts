import React, {Component, useEffect, useState} from 'react';

export const itemState = () => {
  const [items, setItems] = useState([
    {label: 'Education', value: 'Education'},
    {label: 'OpEd', value: 'OpEd'},
    {label: 'Sports', value: 'Sports'},
    {label: 'Summary', value: 'Summary'},
    {label: 'Foreign', value: 'Foreign'},
    {label: 'Corrections', value: 'Corrections'},
    {label: 'Express', value: 'Express'},
    {label: 'Science', value: 'Science'},
    {label: 'Games', value: 'Games'},
    {label: 'Culture', value: 'Culture'},
    {label: 'Styles', value: 'Styles'},
    {label: 'Politics', value: 'Politics'},
    {label: 'Well', value: 'Well'},
  ]);
  return {items, setItems};
};
