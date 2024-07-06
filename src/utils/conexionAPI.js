//import axios from 'axios';


//const hash = "12e4e79b0eba3ff5b651f80a71f1012e"
//const publicKey = "33a74932820d80196d0f04aac676fc0a"

// export const getCharactersAxios = (path)=>{
//     return axios.get (URLBase+path,{
//             params:{
//                 apikey:"33a74932820d80196d0f04aac676fc0a",
//                 hash:"12e4e79b0eba3ff5b651f80a71f1012e",
//                 ts:1
//             }
//         }

//         )
//.then((response)=>response.json())
//   }

// console.log(resCharacters);


// } catch (error) {
//     console.log(error);
// }

// }


export const getApi = (path) => {
    const PUBLIC_KEY = '33a74932820d80196d0f04aac676fc0a'
    const TS = 1
    const hash = '12e4e79b0eba3ff5b651f80a71f1012e'
    
    const URLBase = `https://gateway.marvel.com/${path}?=${TS}&apikey=${PUBLIC_KEY}&hash=${hash}`



    return (
       fetch(URLBase)
        
    )
}

