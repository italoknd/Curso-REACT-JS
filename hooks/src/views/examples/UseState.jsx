import React, {useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseState = (props) => {
const [count, setCount] = useState(0)
const [name, setName] = useState('Vazio...')

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count+1)}>Adicionar 1</button>
                    <button className="btn" onClick={() => setCount(count-1)}>Retirar 1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input type="text" className="input" 
                onChange={(e) => setName(e.target.value)}/>
                <p>Valor do input: {name}</p>
            </div>
        </div>
    )
}

export default UseState
