import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseCountryOfOrigin, chooseDescription, chooseFlavorProfile } from "../redux/slices/RootSlice";

interface InputFormProps {
  id?: string[]
  data?: {}

}


const InputForm = (props:InputFormProps) => {
  const { register, handleSubmit} = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any)  => {
    console.log(`ID: ${typeof props.id}`)
    
    if(props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data} with ID: ${props.id}`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseCountryOfOrigin(data.country_of_origin));
      dispatch(chooseDescription(data.description));
      dispatch(chooseFlavorProfile(data.flavor_profile));
      
      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 10000);
    }
  }
  return (
    
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <label htmlFor="name">Name</label>
          <Input {...register('name')} name="name" placeholder="Name"/>
        </div>
        <div>
          <label htmlFor="country_of_origin">Country of Origin</label>
          <Input {...register('country_of_origin')} name="country_of_origin" placeholder="Country of Origin"/>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Input {...register('description')} name="description" placeholder="Description"/>
        </div>
        <div>
          <label htmlFor="flavor_profile">Flavor Profile</label>
          <Input {...register('flavor_profile')} name="flavor_profile" placeholder="Flavor Profile"/>
        </div>
        <div>
          <button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default InputForm