const productos= [
    {
        id: "1",
        name: "A",
        img: "a"
    },
    {
        id: "2",
        name: "B",
        img: "a"
    },
    {
        id: "3",
        name: "C",
        img: "a"
    },
]


export const getProducts = () =>{
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(error){
                reject("Hubo un error")
            }else{
                resolve(productos)
            }
        }, 2000);
    })
}