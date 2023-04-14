import { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData'


const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex:1},
    { field: 'country_of_origin', headerName: 'COI', flex:0},
    { field: 'description', headerName: 'Description', flex:2},
    { field: 'flavor_profile', headerName: 'Flavor Profile', flex:1},
]

function DataTable() {

    const [open, setOpen ] = useState(false);
    const {sodaData, getData} = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([]); 


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection Model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500);
    }    
  return (
    <>
    <Modal id={ selectionModel } open={ open } onClose={ handleClose}  />
        
    <div className="flex p-5 justify-center space-x-4">
        <button onClick={handleOpen} className="px-4 py-2 rounded-md bg-slate-300 text-gray-800 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400">
            Add New Sodee
        </button>
        <button onClick={handleOpen} className="px-4 py-2 rounded-md bg-slate-300 text-gray-800 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400">
            Update Sodee
        </button>
        <button onClick={deleteData} className="px-4 py-2 rounded-md bg-slate-300 text-gray-800 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400">
            Delete Sodee
        </button>
    </div>


    <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col justify-center"}
      style={{ height: 400, width: '100%' }}
    >
     <h1 className="p-3 bg-slate-300 my-2 rounded">TASTTEA SODUHS</h1>
     <DataGrid rows={sodaData} columns={columns} rowsPerPageOptions={[5]}  checkboxSelection={true}
     onSelectionModelChange={ (item: any) => {
        setSelectionModel(item)
    }}
     />
    </div>
    </>
  )
}

export default DataTable
