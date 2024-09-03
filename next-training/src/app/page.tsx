'use client';

import { useState, useContext } from "react"
import Nigga from "./classes/nigga"
import Nigger from "@/app/Nigger"
import NewNigger from "./addNigga";

async function addNigga(){
    const nigga = await NewNigger();
    return nigga;
}

export default function home() {
    const [user, setUser] = useState(<></>)
    const addUser = (nigga:Nigga) => setUser(Nigger(nigga))

    return (
        <div className= "centered-div">
        <div className="Person">
            {user}
        </div>
          <div className="buttons">
            <button onClick={addUser((await addNigga()))}>Obtener usario de la Web</button>
            <button>Obtener usuario de la base de datos</button>
            <button>Guardar en la base de datos</button>
          </div>
        </div>
    );
}

