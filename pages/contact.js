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
              <Text className='text-3xl' h1>How can you contact Haider?</Text>
              <Button auto onClick={() => open('top')} scale={1/2} mr="10px">Open Menu</Button>
            </Page.Header>
            <Page.Content>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-6xl">
  <form onSubmit={submit}>
    <div class="form-group mb-6">
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
            <Page.Footer>
              <h2>Here we go</h2>
            </Page.Footer>
            </Page>
            <Drawer visible={theState} onClose={() => setState(false)} placement={placement}>
        <Drawer.Title>Menu</Drawer.Title>
        <Drawer.Subtitle>Click Anywhere outside it to close it</Drawer.Subtitle>
        <Drawer.Content style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <Link href={"/"}><Button>Homepage</Button></Link>
          <Link href={"/portfolio"}><Button>Portfolio</Button></Link>
          <Link href={"/blog"}><Button>Blog</Button></Link>
          <Link href={"/contact"}><Button>Contact</Button></Link>
        </Drawer.Content>
      </Drawer>
        </>
  
}

export default Contact