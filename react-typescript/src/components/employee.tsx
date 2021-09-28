type details = {
    info:{
        name:string,
        id: number,
        team: string,
        maritualStatus: boolean
    }[]
}
export const EmployeeDetails = (props: details) =>{
    return (
        <div>
            {props.info.map((eachPerson) => <h1>{
                 `Employee Name: ${eachPerson.name}
                  Employe ID: ${eachPerson.id}
                  Employee Team: ${eachPerson.team}
                  EmployeeMaritualStatus: ${eachPerson.maritualStatus}`}</h1>)}
            <h1>
                {}
            </h1>
        </div>
    )
}