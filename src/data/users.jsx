const users = [
    { user: 'admin',
        pass: '1234',
        role: 'admin',
        token: 'admin'

    },
    { user: 'Bret',
        pass: '5678',
        role: 'user',
        token: 'user'
    },
    { user: 'Antonette',
        pass: '9876',
        role: 'user',
        token: 'user'
    },
    { user: 'Samantha',
        pass: '5432',
        role: 'user',
        token: 'user'
    },
    { user: 'Karianne',
        pass: '1000',
        role: 'user',
        token: 'user'
    },
    { user: 'Kamren',
        pass: '2000',
        role: 'user',
        token: 'user'
    }
]

export function verifyUser( user, pass) {
        const userFound = users.find( (u) => {
            return u.user === user && u.pass === pass
        })


        return userFound ? { 
            role: userFound.role, token: userFound
            .token }  : null
}