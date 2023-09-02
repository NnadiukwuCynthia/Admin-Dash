import DataTable from 'react-data-table-component'

const TableData = () => {
    const columns = [
        {
            name: 'INCIDENTS',
            selector: row => row.name
        },
        {
            name: '',
            selector: row => row.detail
        },
        {
            name: '',
            selector: row => row.level
        }
    ]
    const data = [
        {
            id : 1,
            name: 'Fire Incident',
            detail: 'Failure Object: Fire Safer',
            level: 'High'
        },
        {
            id : 2,
            name: 'Network Failure',
            detail: 'Failure Object: Intercome',
            level: 'Low'
        },
        {
            id : 3,
            name: 'Place Change',
            detail: 'Failure Object: Camera',
            level: 'High'
        },
        {
            id : 4,
            name: 'Asset Broken',
            detail: 'Failure Object: Furniture',
            level: 'High'
        },
        {
            id : 5,
            name: 'Network Failure',
            detail: 'Failure Object: Intercome',
            level: 'Low'
        },
        {
            id : 6,
            name: 'Place Change',
            detail: 'Failure Object: Camera',
            level: 'High'
        },
        {
            id : 7,
            name: 'Asset Broken',
            detail: 'Failure Object: Furniture',
            level: 'High'
        },
        {
            id : 8,
            name: 'Place Change',
            detail: 'Failure Object: Camera',
            level: 'High'
        },
    ]
    return(
        <>
        <h2 className='incidentDetail'>Recent Incidents</h2>
        <div className='TableContainer'>
            <DataTable columns = {columns}
                data = {data} className='Table'>
                
            </DataTable>
        </div>
        </>
    )
}

export default TableData