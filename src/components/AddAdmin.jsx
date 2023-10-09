import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../services/actions/adminAction';
import { useNavigate } from 'react-router-dom';

const AddAdmin = () => {
    const [user, setUser] = useState({ adminName: "", email: "", id: uuidv4(), address: "", contact: "", city: "", occupation: "", province: "" })
    const { error } = useSelector((state) => state.userReducerR)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleAddAdmin = (e) => {
        e.preventDefault()
        const { adminName, email, address, contact, city, occupation, province } = user;
        if (!adminName && !email && !address && !contact && !city && !occupation && !province) {
            alert("Please provide admin details")
        }
        dispatch(addUser(user))
        navigate("/isAdmin", { replace: true })
    }

    return (
        <div>
            <h1 className='text-4xl font-extrabold'>Admin Registration with Redux</h1>
            {
                error && <h1>{error}</h1>
            }
            <div>
                <form onSubmit={handleAddAdmin} >
                    <div className='m-3'>
                        <label htmlFor='adminName' className='text-start'>Admin Name</label><br />
                        <input id="adminName" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your Name' type="text" value={user.adminName} onChange={(e) => setUser({ ...user, adminName: e.target.value })} />
                    </div>

                    <div className='m-3'>
                        <label htmlFor='email' className='text-start'>Email</label><br />
                        <input id="email" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your Email' type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>
                    <div className='m-3'>
                        <label htmlFor='address' className='text-start'>Address</label><br />
                        <input id="address" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your Address' type="text" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />
                    </div>
                    <div className='m-3'>
                        <label htmlFor='contact' className='text-start'>Contact</label><br />
                        <input id="contact" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your Contact' type="number" value={user.contact} onChange={(e) => setUser({ ...user, contact: e.target.value })} />
                    </div>

                    <div className='m-3'>
                        <label htmlFor='division' className='text-start'>State/Province</label><br />
                        <select id="contact" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Select Your Province' type="text" value={user.province} onChange={(e) => setUser({ ...user, province: e.target.value })}>
                            <option>Select Province</option>
                            <option value="Barisal"> Barisal</option>
                            <option value="Chittagong"> Chittagong</option>
                            <option value="Dhaka">  Dhaka</option>
                            <option value="Khulna"> Khulna </option>
                            <option value="Rajshahi"> Rajshahi</option>
                            <option value="Rangpur"> Rangpur </option>
                            <option value="Sylhet"> Sylhet</option>
                        </select>
                    </div>
                    <div className='m-3'>
                        <label htmlFor='city' className='text-start'>City</label><br />

                        {

                            user.province === "Barisal" ? (
                                <select id="city" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your City' type="text" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })}>
                                    <option>Select City</option>
                                    <option value="Barguna">Barguna</option>
                                    <option value="Barisal">Barisal</option>
                                    <option value="Bhola">Bhola</option>
                                    <option value="Jhalokati">Jhalokati</option>
                                    <option value="Patuakhali">Patuakhali</option>
                                    <option value="Pirojpur">Pirojpur</option>
                                </select>
                            ) : user.province === "Chittagong" ? (
                                <select id="city" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your City' type="text" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })}>
                                    <option>Select City</option>
                                    <option value="Bandarban">Bandarban</option>
                                    <option value="Brahmanbaria">Brahmanbaria</option>
                                    <option value="Chandpur">Chandpur</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Comilla">Comilla</option>
                                    <option value="Cox's Bazar">Cox's Bazar</option>
                                    <option value="Feni">Feni</option>
                                    <option value="Khagrachhari">Khagrachhari</option>
                                    <option value="Lakshmipur">Lakshmipur</option>
                                    <option value="Noakhali">Noakhali</option>
                                    <option value="Rangamati">Rangamati</option>
                                </select>
                            ) : user.province === "Dhaka" ? (
                                <select id="city" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your City' type="text" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })}>
                                    <option>Select City</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Faridpur">Faridpur</option>
                                    <option value="Gazipur">Gazipur</option>
                                    <option value="Gopalganj">Gopalganj</option>
                                    <option value="Jamalpur">Patuakhali</option>
                                    <option value="Kishoreganj">Kishoreganj</option>
                                    <option value="Madaripur">Madaripur</option>
                                    <option value="Manikganj">Manikganj</option>
                                    <option value="Munshiganj">Munshiganj</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                    <option value="Narayanganj">Narayanganj</option>
                                    <option value="Narsingdi">Narsingdi</option>
                                    <option value="Netrokona">Netrokona</option>
                                    <option value="Rajbari">Rajbari</option>
                                    <option value="Shariatpur">Shariatpur</option>
                                    <option value="Sherpur">Pirojpur</option>
                                    <option value="Tangail">Tangail</option>
                                </select>
                            ) : user.province === "Khulna" ? (
                                <select id="city" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your City' type="text" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })}>
                                    <option>Select City</option>
                                    <option value="Bagerhat">Bagerhat</option>
                                    <option value="Chuadanga">Chuadanga</option>
                                    <option value="Jessore">Jessore</option>
                                    <option value="Jhenaidaha">Jhenaidaha</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Kushtia">Kushtia</option>
                                    <option value="Magura">Magura</option>
                                    <option value="Meherpur">Meherpur</option>
                                    <option value="Narail">Narail</option>
                                    <option value="Satkhira">Satkhira</option>
                                </select>
                            ) : user.province === "Rajshahi" ? (
                                <select id="city" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your City' type="text" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })}>
                                    <option>Select City</option>
                                    <option value="Bogura">Bogura</option>
                                    <option value="Joypurhat">Joypurhat</option>
                                    <option value="Naogaon">Naogaon</option>
                                    <option value="Natore">Natore</option>
                                    <option value="Nawabganj">Nawabganj</option>
                                    <option value="Pabna">Pabna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Sirajganj">Sirajganj</option>
                                </select>
                            ) : user.province === "Rangpur" ? (
                                <select id="city" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your City' type="text" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })}>
                                    <option>Select City</option>
                                    <option value="Dinajpur">Dinajpur</option>
                                    <option value="Gaibandha">Gaibandha</option>
                                    <option value="Kurigram">Kurigram</option>
                                    <option value="Lalmonirhat">Lalmonirhat</option>
                                    <option value="Nilphamari">Nilphamari</option>
                                    <option value="Panchagarh">Panchagarh</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Thakurgaon">Thakurgaon</option>
                                </select>
                            ) : user.province === "Sylhet" ? (
                                <select id="city" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your City' type="text" value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })}>
                                    <option>Select City</option>
                                    <option value="Habiganj">Habiganj</option>
                                    <option value="Maulvi Bazar">Maulvi Bazar</option>
                                    <option value="Sunamganj">Sunamganj</option>
                                    <option value="Sylhet">Sylhet</option>
                                </select>
                            ) : ""
                        }

                    </div>
                    <div className='m-3'>
                        <label htmlFor='occupation' className='text-start'>Occupation</label><br />
                        <select id="occupation" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' placeholder='Enter Your Occupation' type="text" value={user.occupation} onChange={(e) => setUser({ ...user, occupation: e.target.value })}>
                            <option>Select Occupation</option>
                            <option value="Web Developer">Web Developer</option>
                            <option value="Web Designer">Web Designer</option>
                            <option value="Graphics Designer">Graphics Designer</option>
                            <option value="CEO of Company">CEO of Company</option>
                        </select>
                    </div>
                    <div>
                        <button className='bg-green-500 py-3 px-6 rounded-lg' type='submit' >Add Admin</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddAdmin