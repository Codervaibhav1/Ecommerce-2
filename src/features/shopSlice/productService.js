import axios from "axios"

export  const fetchData = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
}

export const fetchElectronincs = async() =>{
    const response = await axios.get('https://fakestoreapi.com/products/category/electronics')
    console.log(response)
}