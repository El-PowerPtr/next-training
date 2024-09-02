
export const dynamic = 'force-dynamic';
export const cache = 'force-no-cache'

export async function NewNigger(){
    const data = await fetch('https://www.ramdomuser.me/api')
    const json = await data.json()
    const result = json['result']
    return Nigger([result['name']['first'],result['name']['last']].join(' '),
                 result['dob']['age'],
                 result['phone'],
                 result['cell']
    );
}

export function Nigger(name:string, age:number, phone:string, cell:string){
    return (<>
        <ul>
            <li>Nombre: {name}</li>
            <li>Edad: {age}</li>
            <li>Teléfono: {phone}</li>
            <li>Celular: {cell}</li>
        </ul>
    </>)
}

