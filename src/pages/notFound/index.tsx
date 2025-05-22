import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col text-white">
      <h1 className="font-bold text-6xl m-b 2">404</h1>
      <h1 className="font-bold text-4xl mb-4">Página não encontrada</h1>
      <p className="italic text-1xl mb-4">Você caiu em um pagina que não existe!</p>

      <Link to='/' className="bg-gray-50/20 py-1 px-4 rounded-md">voltar para home</Link>
    </div>
  )
}

export default NotFound