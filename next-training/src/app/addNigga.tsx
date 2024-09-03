import { createContext } from "vm";
import Nigga from "./classes/nigga";

export const dynamic = 'force-dynamic';
export const cache = 'force-no-cache'

export async function NewNigger(){
    const data = await fetch('https://www.ramdomuser.me/api')
    const json = await data.json()
    const result = json['result']
    return new Nigga([result['name']['first'],result['name']['last']].join(' '),
                 result['dob']['age'],
                 result['phone'],
                 result['cell']
    );
}

export function Nigger({ name, age, phone, cell }: Nigga) {
    const User = createContext(new Nigga(name, age, phone, cell))

    return (<>
        <ul>
            <li>Nombre: {name}</li>
            <li>Edad: {age}</li>
            <li>Teléfono: {phone}</li>
            <li>Celular: {cell}</li>
        </ul>
    </>)
}

