import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Country from "./Country";


const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://assignment-10-server-blue-iota.vercel.app/countries')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    
    return (
        <div>
            <Fade direction="down" triggerOnce={true}>
                <div className="mb-12">
                    <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">Countries</h2>
                    <p className="font-poppins font-normal text-[#878787] text-center">A country is a distinct territory with defined borders, boundaries, people <br /> and government. Most countries are sovereign states while others make up one part of a larger state.</p>
                </div>
            </Fade>

            <Fade direction="up" triggerOnce={true}>
                <div className="px-32 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        countries.map(country => <Country key={country._id} country={country} />)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default Countries;