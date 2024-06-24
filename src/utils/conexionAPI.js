import axios from 'axios';


const URLBase = 'https://gateway.marvel.com/'
//const hash = "12e4e79b0eba3ff5b651f80a71f1012e"
//const publicKey = "33a74932820d80196d0f04aac676fc0a"

export const getCharactersAxios = async (path)=>{
    try {
        let resCharacters = await axios.get (URLBase+path,{
            params:{
                apikey:"33a74932820d80196d0f04aac676fc0a",
                hash:"12e4e79b0eba3ff5b651f80a71f1012e",
                ts:1
            }
        }

        )
        

    console.log(resCharacters);
      
    
    } catch (error) {
        console.log(error);
    }
    
    }

    