"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import SearchSection from './_components/SearchSection';
import TemplateList from './_components/TemplateList';

function dashboard() {
  const [userSearchInput, setUserSearchInput]=useState<string>()
  return (
    <div>
      {/*Search Section..*/}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
      {/*Template List Section..*/}
      <TemplateList userSearchInput={userSearchInput} />

    </div>
  )
  
}

export default dashboard