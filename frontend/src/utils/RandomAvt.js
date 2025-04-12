
export const randomAvt = () => {
    const avatars = [
         'https://res.cloudinary.com/dq5jpjdgu/image/upload/v1744458147/avatar-cute/jwtsalfov9jjzxs9xyzv.webp',
         'https://res.cloudinary.com/dq5jpjdgu/image/upload/v1744458136/avatar-cute/ny7l77jbcqr8pvbnbwsi.webp',
         'https://res.cloudinary.com/dq5jpjdgu/image/upload/v1744458115/avatar-cute/nu7xknrgamemciusstod.webp',
         'https://res.cloudinary.com/dq5jpjdgu/image/upload/v1744458083/avatar-cute/tw6b5ligobvs5gkaw2sn.webp',
         'https://res.cloudinary.com/dq5jpjdgu/image/upload/v1744458054/avatar-cute/dbb8siijec5fikq8znex.webp'
    ]
    return avatars[Math.floor(Math.random() * avatars.length)]
}