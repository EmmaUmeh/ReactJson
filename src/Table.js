import lists from  "../src/Workers/Employees.json"
const Table = () => {
    const JsonData = lists.map((JsonDatas) => {
        return(
            <tr>
                <td>{JsonDatas.id}</td>
                <td>{JsonDatas.name}</td>
                <td>{JsonDatas.Occupation}</td>
                <td>{JsonDatas.Salary}{JsonDatas.currency}</td>
            </tr>
        )
    })
    return(
        <>
        <table width="100%">
            <thead>
                <tr>
                    <th>Sr.Number</th>
                    <th>Name</th>
                    <th>Jobs</th>
                    <th>Salary</th>
                </tr>
            </thead>
        
      
      <tbody>
      {JsonData}
      </tbody>

      </table>
        </>
    )
}

export default Table;