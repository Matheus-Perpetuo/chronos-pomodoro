import './styles/global.css'
import './styles/theme.css'


import { Menu } from './components/Menu'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { CountDown } from './components/CountDown'

export function App () {

    return (
         <>
        <Container>
            <Logo />
        </Container>

        <Container>
            <Menu />
        </Container>

         <Container>
            <CountDown />
        </Container>
        </>

    )
}


