import { useState } from "react"
import {FaUserPlus} from "react-icons/fa"
export default function QueueForm({onAdd}){
    const [name, setName] = useState('')
    const [service,SetService] = useState('')

    const handleSubmit = (e) => {
       e.preventDefault();
       //validation
       if(!name.trim() || !service.trim()) return
       onAdd({name,service})
       setName('');
       SetService('')
    }
  return (
    <>
     <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to Queue</h2>
        <div className="form-group">
            <input 
            placeholder="Customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            />
        </div>
        <div className="form-group">
            <select 
            placeholder="Customer name"
            value={service}
            onChange={(e) => SetService(e.target.value)}
            >
            <option value="">Select Service</option>
            <option value="consultation">Consultation</option>
            <option value="payment">Payment</option>
            <option value="support">Support</option>
            </select>
        </div>
        <button type="submit"><FaUserPlus />Add Customer</button>
     </form>
    </>
  )
}
