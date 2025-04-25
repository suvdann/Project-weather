import {Container} from "@/app/_components/Container"


const Home = async  ()=>{
 

  const citiesJSON = await fetch(
    " https://countriesnow.space/api/v0.1/countries"
  );
  const cities = await citiesJSON.json();
  // console.log(cities,"cities");
  const citiesWithCountryName=cities.data.map((el)=>{
    return el.cities.map((cityName)=>{
      return{cityName:cityName, countryName:el.country};
    });
  });

  return  <Container countries={citiesWithCountryName}/>;


}

// https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}
// https://countriesnow.space/api/v0.1/countries

export default Home