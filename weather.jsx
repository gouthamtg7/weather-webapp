export default async function GetWeather (e,weather,setWeather){
    e.preventDefault()
    const api_key = "da6d322579731affd43dbef71f5d4a8d"
    const date = new Date()
    const today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
     
    const url = 'https://api.weatherstack.com/current?access_key=db3509619e92aab65da854a31c5a457f&query='+weather.location;
    const options = {
        method : "GET"
    };

    try {
        const response = await fetch(url,options);
        const data = await response.json();
        console.log("Date : ",today,data)
        setWeather(prev =>({
            ...prev,
            date : today,
            temperature : data.current.temperature,
            highs : data.current.temperature+7,
            lows : data.current.temperature-5
        }))
    }
    catch{
        console.error("API Call failure!")
    }


}