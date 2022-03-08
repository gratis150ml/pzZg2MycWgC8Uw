export default function List({content}) {
    return (
        <ul>
        {content.map((i) => <li>{i.title}</li>)}
        </ul>
    )
}