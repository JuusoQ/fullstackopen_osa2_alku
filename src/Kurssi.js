import React from 'react'

const summa = (a,b) => a + b // apufunktio 

const Kurssi = (props) => {
    const {kurssi} = props
    const tehtavia = kurssi.osat.map(o => o.tehtavia).reduce(summa,0)
    return(<div>
        <Otsikko kurssi={kurssi.nimi}/>
        <Sisalto osat={kurssi.osat} />
        <Yhteensa maara={tehtavia}/>
        </div>
    )
}

const Otsikko = (props) => {
    return(
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Sisalto = ({osat}) => {
        return(<div>
            {osat.map(k => <Osa osa={k.nimi} tehtavia={k.tehtavia} key={k.id}/>)}
            </div>
        )
}

const Osa = (props) => {
    return(
    <p>{props.osa} {props.tehtavia}</p>
    )
}

const Yhteensa = (props) => {
    return(
        <div>Yhteensä {props.maara} tehtävää</div>
    )
}

export default Kurssi 