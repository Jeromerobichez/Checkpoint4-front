import { useEffect, useState } from 'react'

import axios from 'axios';

const Inbox = () => {
    const [inbox, setInbox] = useState(null)
    useEffect(() => {
axios.get('http://localhost:3000/Inbox')
.then(res => res.data)
.then(data => setInbox(data))
}, [])

return (
    <div className='inbox'>
        <Inbox />
    </div>
)}

export default Inbox;