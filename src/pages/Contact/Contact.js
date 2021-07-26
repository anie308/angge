import React from 'react'
import {
    Cont,
    Write,
    FormCon,
    Textlg,
    Textsm,
    Form,
    Input,
    InputCon,
    Textarea,
    Br,
    FormButCon,
    FormBut,
} from './Contact.element'


function Contact() {
    return (
        <Cont>
            <Write>
                <Textlg>STAY <Br/>
                      IN TOUCH</Textlg>
                <Textsm>The perfectionism makes some sense, but seems at odds <Br/>with the current infatuation with Jobs. Jobs couldn't find<Br/> the right beige from a set of 200 and had to design a new <Br/> beige. He seemed like the ultimate perfectionist  <Br/>– sometimes.</Textsm>
            </Write>
            <FormCon>
                <Form autoComplete={null}>
                    
                   <InputCon>
                   <Input placeholder='Your name' />
                   <Input  placeholder='Your email'/>
                   <Input  placeholder='Your phone number'/>
                   <Textarea  placeholder='Message' rows='4'/>
                   </InputCon>
                 

                 <FormButCon>
                 <FormBut>LET'S TALK</FormBut>
                 </FormButCon>
              
              
                </Form>
            </FormCon>
        </Cont>
    )
}

export default Contact
