import { HStack, Spacer, Link } from "@chakra-ui/react"
import catLogo from '../../assets/backCat.jpg'

const Navbar = () => {
 return(
    <HStack>
        <img src={catLogo} alt="cat black" width="100px" />
        <Spacer />
     <HStack>
        <Link>Historia</Link>
        <Link>Catalogo</Link>
        <Link>Encuentranos</Link>
     
        </HStack>
     </HStack>
 )

}

export {Navbar}