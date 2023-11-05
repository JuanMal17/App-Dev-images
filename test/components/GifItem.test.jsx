import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas GitItem ', () => {

  test('Match Snapshot ', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    const { container } = render(<GifItem title={title} url={url}/>);
    expect( container).toMatchSnapshot();
  });
  
});
