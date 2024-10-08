import React from 'react'

const StudentResult = () => {
    const result =[
        {id: 1, name:"alex",per:30},
        {id: 2, name:"ayush",per:70},
        {id: 3, name:"himmu",per:80},
        {id: 4, name:"abha",per:76},
        {id: 5, name:"sandeep",per:60}
    ]

    return (
        <div className='container'>
            <table className='table table-border table-striped'>
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Percentage</th></tr>
                </thead>
                <tbody>
                    {
                        result.map(item=>(
                            <tr key={item.id} 
                                className={`${item.per>60 ? 'table-info':'table-danger'}`}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.per}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentResult