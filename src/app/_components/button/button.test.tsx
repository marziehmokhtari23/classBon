import {describe} from "node:test"

import {render,screen} from '@testing-library/react'
import { Button } from "./button" 
describe('Button compoment',()=>{
    test('default button',()=>{
     const {getByText} = render(<Button>click here</Button>)
     expect(getByText('click here')).toBeInTheDocument();
    })
    test('disabled button',()=>{
        const {getByText} = render(<Button isDisabled={true}>click here</Button>)
        expect(getByText('click here')).toBeDisabled();
       })
    test('variant attribute of button',()=>{
        const {getByText} = render(<Button variant="primary">click here</Button>)
        expect(screen.getByRole('button')).toHaveClass('btn-primary')
       })
       test('isLink props for Button',()=>{
        render(<Button isLink={true}>click here</Button>)
        expect(screen.getByRole('button')).toHaveClass('btn-link')
       })
       test('disabled class for button',()=>{
        render(<Button isLoading={true}>clik here</Button>)
        expect(screen.getByRole('button')).toHaveClass('pointer-events-none opacity-80')
       })
       test('rendering button',()=>{
        render(<Button variant="primary" isLoading={true} isLink={true} isDisabled={true}>click here</Button>)
        screen.debug()
       })
       test('snapShot of button',()=>{
        const {container}=render(<Button variant="primary" isDisabled={true}>click here</Button>)
        expect(container).toMatchSnapshot(`
            <button type={type} disabled={isDisabled}{...rest} className={classes}>
            {isLoading && <Loading type={loadingType}/>}
            {isLoading ? loadingText:children}
        </button>  
            `
        )
       })
})