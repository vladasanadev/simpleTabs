import React from "react";
import './App.css';

interface TabsProps {
  tabs: { id: number; title: string; content: string }[];
  activeTabId: number;
  onTabSelected: (tabId: number) => void;
}

export default function Tabs({ tabs, activeTabId, onTabSelected }: TabsProps) {
  return (
    <>
      <div>Tabs</div>
      <ul>
        {tabs.map((tab) => {
          return (
            <li
              key={tab.id}
              onClick={() => onTabSelected(tab.id)}
              className={activeTabId === tab.id ? "is-active" : ""}
            >
              <a href={`#tab-${tab.id}`}>{tab.title}</a>
            
            </li>
          );
        })}
      </ul>
      
        <p>
        {tabs.find((tab)=> tab.id === activeTabId)?.content}
      </p>
      
    </>
  );
}
