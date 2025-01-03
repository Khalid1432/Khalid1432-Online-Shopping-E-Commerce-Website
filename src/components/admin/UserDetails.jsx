import { useContext } from "react"
import { ContextApp } from "../../contextapi/ContextApp"
import Spinner from "../Spinner";

const UserDetails = () => {
    const{getAllUser,loading}=useContext(ContextApp);
    return (
        <section className='w-full mt-6 px-2'>
            
            <h2 className='font-semibold text-pink-500 text-lg font-inter'>All Users</h2>
            <div className='flex justify-center'>
                {
                    loading && <div className='absolute  -bottom-16'><Spinner /></div>
                }
            </div>
            <table className='w-full border border-pink-500 mt-4'>
                <thead>
                    <tr className='border border-pink-500 text-left text-pink-500 text-base font-inter'>
                        <th className='border border-pink-500 py-2 px-3'>S.No.</th>
                        <th className='border border-pink-500 px-3'>Name</th>
                        <th className='border border-pink-500 px-3'>Email</th>
                        <th className='border border-pink-500 px-3'>Uid</th>
                        <th className='border border-pink-500 px-3'>Role</th>
                        <th className='border border-pink-500 px-3'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getAllUser.map((item, index) =>
                            <tr key={item.id} className='text-pink-500'>
                                <td className='border border-pink-500 py-2 px-3'>{index + 1}.</td>
                                <td className='border border-pink-500 px-3'>{item.name}</td>
                                <td className='border border-pink-500 px-3'>{item.email}</td>
                                <td className='border border-pink-500 px-3 '>{item.uid}</td>
                                <td className='border border-pink-500 px-3'>{item.role}</td>
                                <td className='border border-pink-500 px-3'>{item.date}</td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </section>
    )
}

export default UserDetails
