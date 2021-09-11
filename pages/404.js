import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2500)
    }, [])

    return ( 
       <div className="not-found">
           <h1>Ooops.....</h1>
           <h3> Not here </h3>
           <p><Link href="/"><a>HomePage</a></Link></p>
       </div> 
     );
}
 
export default NotFound;