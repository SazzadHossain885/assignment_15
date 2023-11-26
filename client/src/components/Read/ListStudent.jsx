import { useEffect, useState } from 'react';
import { readStudent, deleteStudent } from "../../api/apiService.js";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const ListStudent= () => {
    const [studentData, setStudentData] = useState([]);
    const [reload, setReload] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        (async() => {
            const result = await readStudent();
            setStudentData(result);
            setReload(false);
        })()
    }, [reload]);

    const deleteItem = async(id) => {
        const result = await deleteStudent(id);
        if(result) toast.success("Deleted Successfully!");
        else toast.error("Failed to Delete");
        setReload(true);
    }

    const updateItem = (id) => {
        navigate("/update/"+id);
    }

    if(studentData.length === 0){
        return (
            <div className="flex justify-center max-w-7xl mx-auto mt-40">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }

    else {
        return (
        <div className="max-w-7xl mx-auto overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Nationality</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Admission Date</th>
                        <th>Courses</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentData.map((item) => {
                            return (
                                <tr key={item._id}>
                                    <td>{item.firstName + " " + item.lastName}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.dateOfBirth}</td>
                                    <td>{item.nationality}</td>
                                    <td>{item.address}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.admissionDate}</td>
                                    <td>{item.courses}</td>
                                    <td>
                                        <button className="btn btn-sm btn-error mx-2 text-white" onClick={() => deleteItem(item._id)}>Delete</button>
                                        <button className="btn btn-sm btn-info text-white" onClick={() => updateItem(item._id)}>Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Toaster position="top-center" reverseOrder={true} />
        </div>
        );
    }
};

export default ListStudent;