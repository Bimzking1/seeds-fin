import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PokemonCard from './pokemonCard';

const pokemon = () => {

    const [data, setData] = useState<
        Array<{
            name: string,
            url: string
        }>
    >([])
        
    useEffect(() => {
        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://pokeapi.co/api/v2/pokemon`,
        };
    
        axios.request(config)
        .then((response) => {
            // console.log(response)
            setData(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        });
    }, [])

    // console.log('data ', data)

    return (
        <div className='flex justify-center items-center pt-8 pb-16 bg-[#FBFAF5] dark:bg-[#2e2e2e] duration-300 px-4'>
            <div className='h-full w-full xl:w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mb-2 px-2 xl:px-0 md:px-4'>
                {
                    data.map((datas, index) => {
                        return (
                            <PokemonCard key={index} index={index} name={datas.name} url={datas.url}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default pokemon