import React from 'react';
import Link from 'next/link'
import { Page, useTheme, Button, Drawer, Text} from '@geist-ui/core'
import { useForm } from "@formcarry/react";


function Contact() {

const { state, submit } = useForm({
  id: 'rAxlZ2HTGH'
});
const { palette } = useTheme()
const [ theState, setState ] = React.useState(false)
const [ placement, setPlacement ] = React.useState('')
const open = (text) => {
  setPlacement(text)
  setState(true)
}

if (state.submitted) {
  return <p>Thank you for submitting this form</p>
}

return <> <Page className='flex flex-col justify-center items-center gap-2'>
            <Page.Header style={{ color: palette.successLight }}>
              <div className='port-text'><Text className='md:text-5xl sm:text-2xl' style={{margin: "0.5rem", padding: "0.5rem", color: "#fc0174", textShadow: "-1px 1px 0 #310a3f"}} h1>How can you contact Haider?</Text></div>
              <Button auto onClick={() => open('top')} scale={1/2} mr="10px" style={{marginTop: "5px"}}>Open Menu</Button>
            </Page.Header>
            <Page.Content>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-6xl">
  <form onSubmit={submit}>
    <div className="form-group mb-6">
      <input id="name" type="text" name='name' class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Name"/>
    </div>
    <div class="form-group mb-6">
      <input id="email" type="email" name="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Email address"/>
    </div>
    <div class="form-group mb-6">
      <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="message"
      name="message"
      rows="3"
      placeholder="Message"
    ></textarea>
    </div>
    <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Send</button>
  </form>
</div>
            </Page.Content>
            <div className="footer" style={{ marginTop: '5rem', padding: '1rem', backgroundColor: '#310a3f', color: '#fff' }}>
          <div className="flex flex-col items-center">
            <Text className='text-lg' style={{ marginBottom: '0.5rem' }}>
              © 2024 Haider's Portfolio | All rights reserved.
            </Text>
            <div className="flex space-x-4">
              <Link href="/privacy" style={{ color: '#fff' }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: '#fff'}}>Terms of Service</Link>
            </div>
          </div>
        </div>
            </Page>
            <Drawer visible={theState} onClose={() => setState(false)} placement={placement}>
        <Drawer.Title>Menu</Drawer.Title>
        <Drawer.Subtitle>Click Anywhere outside it to close it</Drawer.Subtitle>
        <Drawer.Content style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <div className='Menu'>
          <Link href={"/"}><Button>Homepage</Button></Link>
          <Link href={"/portfolio"}><Button>Portfolio</Button></Link>
          <Link href={"/blog"}><Button>Blog</Button></Link>
          <Link href={"/contact"}><Button>Contact</Button></Link>
          </div>
        </Drawer.Content>
      </Drawer>
        </>
  
}

export default Contact