import React,{ useState  } from 'react'
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
export default function CookieRs() {
  

    const [name, setName] = useState(0);
    
    let cookieTest = () => {
        setName(Cookies.get('name') || 'woswkd98')
        
    }

    return (
        <div>
            <button onClick = {cookieTest}>전송</button>
            {name}
        </div>
    )
}
