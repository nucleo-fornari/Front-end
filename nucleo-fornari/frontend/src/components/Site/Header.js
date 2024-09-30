function Header({ logoAzul }) {
    return (
        <header className="bg-white-cinzabg w-full h-20 text-lg">
            <ul className="flex justify-evenly items-center text-blue-main font-medium flex-wrap">
                <li>
                    <img src={logoAzul} alt="logotipo núcleo fornari azul" className="justify-self-start h-67 w-100" />
                </li>
                <li>
                    Início
                </li>
                <li>
                    O projeto
                </li>
                <li>
                    A escola
                </li>
                <li>
                    Contato
                </li>
                <li>
                    <button className="text-white-main bg-blue-main py-1 px-8 rounded-2xl font-normal justify-self-end">
                        Login
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Header;