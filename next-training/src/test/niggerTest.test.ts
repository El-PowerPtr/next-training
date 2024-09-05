import NewNigger from "@/app/addNigga";
import {test, expect} from "@jest/globals";

test("A random nigga cannot be null", ()=>{
    expect( async ()=> await NewNigger() ).toBeDefined();
})