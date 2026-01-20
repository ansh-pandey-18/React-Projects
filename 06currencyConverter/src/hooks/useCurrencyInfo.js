import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data,setData] = useState({})      //Re-render UI whwnever data of currency changes

    useEffect(()=>{                          //Fetch data from API whenever currency changes
        fetch(`https://api.frankfurter.dev/v1/latest?base=${currency.toUpperCase()}`)   
        .then((res)=>res.json())
        .then((res)=>setData({...res.rates,[res.base]:1}))      //Change this according to data present in API. Here res.rates contains currency info. Including base currency with value 1

    },[currency])

    console.log(data)
    return data                              //Return currency info
}

export default useCurrencyInfo

/*
What useCurrencyInfo should do:
1. useState to store currency Data and render in UI whenever it chanegs
2. useEffect to fetch data from API whenever currency changes
3. Return currency data

Steps to implement:
1. We have URL of API from where we will fetch currency info from API and return value
2. We need to fetch data from API everytime currency changes=> useEffect hook with currency in dependency array
3. We need to re-render UI when we get new data from API=> useState hook to store currency info
4. Finally we will return currency info from this hook
*/