import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const inputtrim = inputValue.trim();
        if( inputtrim.length <= 1) return; 
        setInputValue('');
        onNewCategory(inputtrim);
    }

  return (
    <form onSubmit={ onSubmit }>
      <input type="text" placeholder="search gifs..."
        value={ inputValue }
        onChange={ onInputChange }/>
    </form>
  )
}
