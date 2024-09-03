import Nigga from "./classes/nigga";

export const dynamic = 'force-dynamic';
export const cache = 'force-no-cache'

export default async function NewNigger(){
    const data = await fetch('https://www.ramdomuser.me/api')
    const json = await data.json()
    const result = json['result']
    return new Nigga([result['name']['first'],result['name']['last']].join(' '),
                 result['dob']['age'],
                 result['phone'],
                 result['cell']
    );
}


