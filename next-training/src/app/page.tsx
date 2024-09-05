'use client';

import { useState, useContext, createContext, Context } from "react"
import Nigga from "./classes/nigga"
import Nigger from "@/app/Nigger"
import NewNigger from "./addNigga";
import getRandomNigga from "./random/getRandomNIgga";
import saveNigga from "./save/saveNigga";

async function addNigga(){
    const nigga = await NewNigger();
    return nigga;
}

export default function Main() {
    const [niggaData, setNiggaData] = useState<Nigga|null>(null)
    const [user, setUser] = useState(<></>)
    const addUser = (nigga:Nigga|null) => { 
      if(nigga){
         setUser(Nigger(nigga)) 
         setNiggaData(nigga)
      }
    }

    return (
        <div className= "centered-div">
        <div className="Person">
            {user}
        </div>
          <div className="buttons">
            <button onClick={ async ()=> addUser( ( await addNigga() ) ) }>Obtener usario de la Web</button>
            <button onClick={ async ()=> addUser( ( await getRandomNigga() ) ) }>Obtener usuario de la base de datos</button>
            <button onClick={ async ()=> {
                if(niggaData) await saveNigga(
                  {
                  "name":niggaData.name,
                  "age": niggaData.age,
                  "phone": niggaData.phone ,
                  "cell": niggaData.cell}) } }>Guardar en la base de datos</button>
          </div>
        </div>
    );
}

