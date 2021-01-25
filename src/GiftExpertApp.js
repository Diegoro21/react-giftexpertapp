import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    // const categories = ['Naruto', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Naruto']);

    const handleAdd = () => {
        // Cualquiera de las dos formas es igual
        setCategories(['Alf', ...categories]);
        // SetCategories tiene un callback del estado anterior "cats"
        // setCategories(cats => ['Alf', ...cats]);
    }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}
            
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={category}
                            category={category} />
                        // return <li key={category}>{category}</li>
                    )
                }
            </ol>
        </>
    )
}
