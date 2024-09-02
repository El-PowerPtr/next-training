import Nigga from "@/app/classes/nigga";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store'

export async function GET(){
    const data = await fetch('https://randomuser.me/api/');
    const json = await data.json()
    const result = json['results'][0]
    const nigga = new Nigga([result['name']['first'],result['name']['last']].join(' '),   //name
                        result['dob']['age'],                                             //age
                        [result['phone'],result['cell']]                                  //phone
    ); 
    return Response.json(nigga);
}