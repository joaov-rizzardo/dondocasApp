import { Link } from 'react-router-dom'
import './Menu.scss'

export default function Menu(){
    return (
        <header className="Menu">
            <div>
                <h1>Dondocas app</h1>
            </div>

            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/">Vendas</Link>
                <Link to="/despesas">Despesas</Link> 
                <Link to="/produtos">Produtos</Link>
                <Link to="/etiquetas">Etiquetas</Link>            
            </nav>
        </header>
    )
}