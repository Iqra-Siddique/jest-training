import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {act} from 'react-dom/test-utils'
import MyComponent from './MyComponent'


describe('MyComponent', ()=>{
    const mockTitle= 'Hello World'
    const mockClickButton = jest.fn().mockImplementation(()=>console.log('hello'))
    test('should have correct title value.', ()=>{
        const screen = render(<MyComponent title={mockTitle} clickButton={mockClickButton}/>)
        const headingElement = screen.getByTestId('title')
        const inputElement = screen.getByTestId('input-field')
        expect(inputElement).toBeInTheDocument()
        const buttonElement= screen.getByTestId('button')

        //  act(()=>{
            userEvent.type(inputElement, 'guys')
            userEvent.click(buttonElement)
        // })
        expect(inputElement).toHaveValue('guys')
        

    expect(mockClickButton).toBeCalledTimes(1)





        expect(headingElement).not.toHaveTextContent('Hello Worldsds')
    })
})