function PeopleList() {

    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
      ];
    
    const listItem = people.map(person =>
        <li>{person}</li>)

    return(
        <div>{listItem}</div>
    );
}

export default PeopleList;