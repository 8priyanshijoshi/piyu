import React from 'react'

const ConditionEx = () => {
  const Person = ({name,city}) => {
    if (city === "surat"){
        return <div>{name}🏙️</div>
    }
    else {
        return <div>{name}🌆</div>
    }
  }

  return(
    <>
        <Person name="rita" city="surat"/>
        <Person name="rahul" city="bardoli"/>
        <Person name="riyan" city="ahemdabad"/>
        <Person name="resham" city="vapi"/>
        <Person name="rinita" city="surat"/>
        <Person name="risha" city="surat"/>
    </>
  )
}

export default ConditionEx
