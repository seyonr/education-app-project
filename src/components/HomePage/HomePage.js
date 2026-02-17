import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

function HomePage() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const refresh = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => refresh();
    })

    return (
        <div>
            {user ? <h1>Hello, {user.email}</h1> :  <h1>Hello</h1>}
        </div>
    )
}

export default HomePage