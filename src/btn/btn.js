export default function Btn(props) {

    const bc = props.background;
    const c = props.color;
    const v = props.value;

    return (
        <button style={{ 'background': `${bc}`, 'color': `${c}` }}>{v}</button>
    )
}