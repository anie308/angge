import React from 'react'
import {
    Cont,
    Write,
    FormCon,
    Textlg,
    Textm,
    Form,
    Input,
    InputCon,
    Textarea,
    Br,
    Bra,
    FormButCon,
    FormBut,
} from './Contact.element'


function Contact() {
    return (
        <Cont id='contact'>
            <Write>
                <Textlg>STAY <Bra/>
                      IN TOUCH</Textlg>
                <Textm>The perfectionism makes some sense, but seems at odds <Br/>with the current infatuation with Jobs. Jobs couldn't find the<Br/> right beige from a set of 200 and had to design a new  beige. He<Br/> seemed like the ultimate perfectionist – sometimes.</Textm>

           
            </Write>
            <FormCon>
           
                <Form autoComplete={null}>
                    
                   <InputCon>
                   <Input placeholder='Your name' />
                   <Input  placeholder='Your email'/>
                   <Input  placeholder=' Phone number'/>
                   <Textarea  placeholder='Message' rows='4'/>
                   </InputCon>
                 

                 <FormButCon>
                 <FormBut type='submit'>LET'S TALK</FormBut>
                 </FormButCon>
              
              
                </Form>
            </FormCon>
        </Cont>
    )
}

export default Contact
