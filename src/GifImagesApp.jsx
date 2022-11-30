import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifImagesApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Naruto']);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif Images App</h1>
            {/* <AddCategory setCategories = { setCategories }/> */}
            <AddCategory onNewCategory = { onAddCategory } />
            
                { categories.map( ( category ) => (
                    <GifGrid key={ category }  category = {category} />
                    ))
                }
        </>
    )
}