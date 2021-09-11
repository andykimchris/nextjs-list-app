import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps  = async (context) => {
    const id = context.params.id
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id) 
    const single_user = await response.json()   

    if (!single_user) {
        return {
            notFound: true
        }
    }
    
    return {
        props: { single_user }
    }
    
}

const UserInfo = ({ single_user }) => {
    const router = useRouter() 
    
    console.table('router query', router.query)
    
    return (
        <div>
          <h1>{ single_user.name }</h1>
          <p>{ single_user.email }</p>
          <p>{ single_user.website }</p>
          <p>{ single_user.address.city }</p>
        </div>
      );
    }
    
    export default UserInfo;