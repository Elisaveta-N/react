import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  checkboxClick,
  selectAgreed,
} from "../features/counter/agreementSlice.js"
import "../app/lisenseAgreement.css"


export function Checkbox({name, label}) {
  const count = useSelector(selectAgreed);
  const dispatch = useDispatch();

  return (
    <div>
        <input id={name} type="checkbox" checked={count} onChange={() => dispatch(checkboxClick())}/>
        <label htmlFor={name}>{label}</label>
    </div>
  );
}


