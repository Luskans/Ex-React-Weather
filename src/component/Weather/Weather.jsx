/* eslint-disable react/prop-types */
export default function Weather({ datas, onNameChange, onSubmit, cityName }) {

    return (
        <>
            <form onSubmit={onSubmit}>
                <input className="card-input" placeholder='Recherchez une ville...' type="text" onChange={onNameChange} value={cityName} />
            </form>
            <span className="card-title">{datas.place}</span>
            <p><img style={{ width: 250, height: 250 }} src={datas.icone} /></p>
            <span className="temperature">{datas.temp}°</span>
            <div className="wind">Vent {datas.wind}km/h ({datas.degree}°)</div>
        </>
    )
}
