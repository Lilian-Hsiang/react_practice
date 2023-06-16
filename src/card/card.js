import "./card.css"
import Btn from "../btn/btn"
export default function Card() {
    return (
        <div className="card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
            <h5>I LOVE PET!</h5>
            <hr />
            <input type="text" />
            <Btn background='black' color='white' value='Enter' />
            <Btn background='white' color='black' value='Cancel' />
        </div>

    )
}