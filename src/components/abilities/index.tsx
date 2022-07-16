interface IAbilities {
  abilities: string[]
}

export const Abilities: React.FC<IAbilities> = ({ abilities }) => {
  return (
    <ol>
      {abilities?.map(item => <li key={item}>{item}</li>)}
    </ol>
  )
}

export default Abilities
