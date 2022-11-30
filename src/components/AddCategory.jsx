import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputvalue ] = useState(['']);

    const onInputChange = ( {target}) => {
        setInputvalue( target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories( categories => [ ...categories, inputValue]);
        onNewCategory( inputValue.trim() );
        setInputvalue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type='text' placeholder="Item" value={ inputValue }
            onChange={ onInputChange }/>
        </form>
    )
}