import color from "./color";

export default function(props) {
    return (
        <div style = {{borderStyle: 'solid', borderColor: color.blurple, borderRadius: '10px'}}>
            <h1 style = {{color: color.blurple, position: 'relative', fontFamily: 'sans-serif', borderStyle: 'double', borderColor: color.blurple, borderRadius: '10px', textAlign: 'center', borderWidth: '10px' }}>
                {props.title}
            </h1>
            <h2 style = {{color: color.white, fontFamily: 'sans-serif'}}>
                {props.content}
            </h2>
        </div>
    )
}