import React, { useState } from 'react'

const CharacterCount = () => {
    const [text, setText] = useState('');
    const Limit = 100;
  return (
    <div>
        <h2>Character Counter</h2>
        <textarea rows={5} colunm={5} value={text} placeholder='Type Something...' onChange={(e) => setText(e.target.value)} style={{borderColor : text.length > Limit ? 'red' : '#ccc' , outline : 'none', padding: '10px' }}></textarea>
        <p style={{color: text.length > Limit ? 'red' : 'black'}}> {text.length} / {Limit} characters</p>
        {text.length > Limit && <p style={{color: 'red'}}>Limit Exceeded</p>}
    </div>
  )
}

export default CharacterCount
