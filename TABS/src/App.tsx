import { useState } from 'react';
import './App.css'
import Tabs from './Tabs';

interface Tab {
  id:number;
  title: string;
  content: string;
}

const tabs: Tab[] = [
  { id: 1, title: "Tab 1", content: "This is Tab 1 content" },
  { id: 2, title: "Tab 2", content: "This is Tab 2 content" },
  { id: 3, title: "Tab 3", content: "This is Tab 3 content" },
];

function App() {
  const [tab, setTab] = useState<number>(1)
   
  const onTabSelected = (activeTabId:number) =>{
    setTab(activeTabId)
  }
  return (
    <>
    <h1>Selected Tab is {tab} {tabs[tab].title}</h1>
    <Tabs tabs={tabs} activeTabId={tab} onTabSelected={onTabSelected}/>
    </>
  )
}

export default App
