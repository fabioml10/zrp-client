interface Abilities {
  abilities: string[]
}

export const Abilities: React.FC<Abilities> = ({ abilities }) => {
  return (
    <ol>
      {abilities?.map(item => <li key={item}>{item}</li>)}
    </ol>
  )
}

export default Abilities
