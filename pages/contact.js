import React from 'react';
import Link from 'next/link'
import { Page, useTheme, Button, Drawer, Text, Card } from '@geist-ui/core'


function Contact() {

const { palette } = useTheme()
const [ state, setState] = React.useState(false)
const [ placement, setPlacement] = React.useState('')
const open = (text) => {
  setPlacement(text)
  setState(true)
}

return <> <Page className='flex flex-col text-center'>
            <Page.Header style={{ color: palette.successLight }}>
              <Text h1>How you can contact Haider</Text>
              <Button auto onClick={() => open('top')} scale={1/2} mr="10px">Open Menu</Button>
            </Page.Header>
            <Page.Content>
            <div class="flex flex-col ...">
                <Card width="100%" className="grow hover:grow-0">
                    <Text h4 my={0}>01</Text>
                    <Text>Modern and minimalist React UI library.</Text>
                    <Card.Footer>
                        <Link color target="_blank" href="https://github.com/geist-org/geist-ui">Visit source code on GitHub.</Link>
                    </Card.Footer>
                </Card>
                <Card width="100%" className="grow hover:grow-0">
                    <Text h4 my={0}>02</Text>
                    <Text>Modern and minimalist React UI library.</Text>
                    <Card.Footer>
                        <Link color target="_blank" href="https://github.com/geist-org/geist-ui">Visit source code on GitHub.</Link>
                    </Card.Footer>
                </Card>
                <Card width="100%" className="grow hover:grow-0">
                    <Text h4 my={0}>03</Text>
                    <Text>Modern and minimalist React UI library.</Text>
                    <Card.Footer>
                        <Link color target="_blank" href="https://github.com/geist-org/geist-ui">Visit source code on GitHub.</Link>
                    </Card.Footer>
                </Card>
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

export default Contact