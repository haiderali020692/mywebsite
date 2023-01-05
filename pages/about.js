import React from 'react';
import Link from 'next/link'
import { Page, useTheme, Button, Drawer, Text, Display, Image } from '@geist-ui/core'

function Portfolio() {

const { palette } = useTheme()
const [ state, setState] = React.useState(false)
const [ placement, setPlacement] = React.useState('')
const open = (text) => {
  setPlacement(text)
  setState(true)
}

return <> <Page className='flex flex-col text-center'>
            <Page.Header style={{ color: palette.successLight }}>
              <Text className='text-5xl font-mono' style={{margin: "1.5rem"}} h1>Who is Haider Ali?</Text>
              <Button auto onClick={() => open('top')} scale={1/2} mr="10px">Open Menu</Button>
            </Page.Header>
            <Page.Content>

            
            <div className="flex flex-row space-x-6">
            <Image width="500px" height="600px" src='/IMG_2399.jpg' />
       
            <Text class="text-center" className="space-x-6 m-8">He is about to create a mythos that will span centuries not just for Everyone</Text>
            </div>
        

            </Page.Content>
            <Page.Footer>
              <h2>Here we go</h2>
            </Page.Footer>
            </Page>
            <Drawer visible={state} onClose={() => setState(false)} placement={placement}>
        <Drawer.Title>Menu</Drawer.Title>
        <Drawer.Subtitle>Click Anywhere outside it to close it</Drawer.Subtitle>
        <Drawer.Content style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <Link href={"/"}><Button>Homepage</Button></Link>
          <Link href={"/about"}><Button>About</Button></Link>
          <Link href={"/blog"}><Button>Blog</Button></Link>
          <Button>Search</Button>
        </Drawer.Content>
      </Drawer>
        </>
  
}

export default Portfolio