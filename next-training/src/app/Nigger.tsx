'use client';

import { createContext } from "react";
import Nigga from "./classes/nigga";


export default function Nigger({ name, age, phone, cell }: Nigga) {
    const User = createContext(new Nigga(name, age, phone, cell ))

    return (<>
        <ul>
            <li>Nombre: {name}</li>
            <li>Edad: {age}</li>
            <li>Teléfono: {phone}</li>
            <li>Celular: {cell}</li>
        </ul>
    </>)
}

function 