// Write your Character component here


const People = props => {
    const { name } = props

    return (
        <div>
            {props.name}
        </div>
    )
}

export const people = (person) => {
    return (
        <p>
            {person.name}
        </p>
    )
}

export default People