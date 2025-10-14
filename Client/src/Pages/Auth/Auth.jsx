import { H1 } from '@/components/Atoms/Shared/headings'
import TabComponent from '@/components/Atoms/Tabs/TabComponent'
import React from 'react'


const Auth = () => {
    const tabs = [{
        name : 'login',
        component : <H1>login</H1>
    },
    {
        name : 'sign in',
        component : <H1>sign in</H1>
    }
] 
  return (
    <div>
      <TabComponent variant='vertical' tabs={tabs}/>
    </div>
  )
}

export default Auth
