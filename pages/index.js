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
            <Page.Header style={{ color: "palette.successLight" }}>
              <Text className='text-4xl' style={{margin: "1.5rem", marginBottom: "5rem", color: "#fc0174", textShadow: "-1px 1px 0 #310a3f"}} h1>Welcome to Haider's Website</Text>
              <Button auto onClick={() => open('top')} scale={1/2} mr="10px">Open Menu</Button>
            </Page.Header>
            <Page.Content style={{ marginBottom: '10rem'}}>

            
            <div className="flex flex-row space-x-6">
            <Image width="500px" height="600px" src='/IMG_2399.jpg' />
       
            <Text style={{ color: "#c70554" }} class="text-center" className="space-x-6 m-8 para">He is about to create a mythos that will span centuries not just for Everyone</Text>
            </div>
        

            </Page.Content>
            <div className="sm:mr-18" style={{ marginTop: '5rem', padding: '1rem', backgroundColor: '#310a3f', color: '#fff' }}>
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
            <Drawer visible={state} onClose={() => setState(false)} placement={placement}>
        <Drawer.Title>Menu</Drawer.Title>
        <Drawer.Subtitle>Click Anywhere outside it to close it</Drawer.Subtitle>
        <Drawer.Content style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <div className="Menu">
          <Link href={"/"}><Button>Homepage</Button></Link>
          <Link href={"/portfolio"}><Button>Portfolio</Button></Link>
          <Link href={"/blog"}><Button>Blog</Button></Link>
          <Link href={"/contact"}><Button>Contact</Button></Link>
          </div>
        </Drawer.Content>
      </Drawer>
        </>
  
}

export default Portfolio 