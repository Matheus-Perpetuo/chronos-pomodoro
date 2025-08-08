import './styles/global.css'
import './styles/theme.css'


import { Menu } from './components/Menu'
import { Container } from './components/Container'
import { Logo } from './components/Logo'

export function App () {

    return (
         <>
        <Container>
            <Logo />
        </Container>

        <Container>
            <Menu />
        </Container>
        </>
    )
}


