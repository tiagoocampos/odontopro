export function Footer(){
    return(
        <footer className="py-6 text-center text-gray-500 text-sm md:text-base">
            <p>Todos os direitos reservados © {new Date().getFullYear()} - <a href="https://www.linkedin.com/in/tiagocamposdasilva/" target="blank" className="hover:text-black duration-300">@tiagocampos</a>  </p>
        </footer>
    )
}