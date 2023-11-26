import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { isEmpty } from "../../Helper/ValidationHelper.js";
import { updateStudent, readStudentById } from "../../api/apiService.js";
import { useNavigate } from "react-router-dom";

const UpdateForm = ({ id }) => {
    const [studentData, setStudentData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        nationality: "",
        address: "",
        email: "",
        phone: "",
        admissionDate: "",
        courses: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const result = await readStudentById(id);
            setStudentData(result);
        })()
    }, [id]);

    const onInputChange = (e, key) => {
        setStudentData({
            ...studentData,
            [key]: e.target.value
        })
    }

    const updateData = async (e) => {
        e.preventDefault();
        const firstName = studentData.firstName;
        const lastName = studentData.lastName;
        const gender = studentData.gender;
        const dateOfBirth = studentData.dateOfBirth;
        const nationality = studentData.nationality;
        const address = studentData.address;
        const email = studentData.email;
        const phone = studentData.phone;
        const admissionDate = studentData.admissionDate;
        const courses = studentData.courses;

        if (isEmpty(firstName)) {
            toast.error('FirstName is required')
        }
        else if (isEmpty(lastName)) {
            toast.error('LastName is required')
        }
        else if (isEmpty(gender)) {
            toast.error('Gender is required')
        }
        else if (isEmpty(dateOfBirth)) {
            toast.error('Date Of Birth is required')
        }
        else if (isEmpty(nationality)) {
            toast.error('Nationality is required')
        }
        else if (isEmpty(address)) {
            toast.error('Address is required')
        }
        else if (isEmpty(email)) {
            toast.error('Email is required')
        }
        else if (isEmpty(phone)) {
            toast.error('Phone is required')
        }
        else if (isEmpty(admissionDate)) {
            toast.error('Admission Date is required')
        }
        else if (isEmpty(courses)) {
            toast.error('Courses is required')
        }
        else {
            const result = await updateStudent(id, firstName, lastName, gender, dateOfBirth, nationality, address, email, phone, admissionDate, courses);
            if (result) {
                toast.success("Data Updated successfully");
                navigate("/");
            }
            else {
                toast.error("Failed try again!");
            }
        }
    }

    return (
        <>
            <div className="max-w-7xl mx-auto bg-slate-100 rounded-lg shadow-xl p-5">
                <form className="grid grid-cols-3" onSubmit={updateData}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">First Name</span></label>
                        <input onChange={(e) => onInputChange(e, "firstName")} type="text" value={studentData.firstName} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Last Name</span></label>
                        <input onChange={(e) => onInputChange(e, "lastName")} type="text" value={studentData.lastName} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Gender</span></label>
                        <input onChange={(e) => onInputChange(e, "lastName")} type="text" value={studentData.gender} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Date Of Birth</span></label>
                        <input onChange={(e) => onInputChange(e, "dateOfBirth")} type="text" value={studentData.dateOfBirth} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Nationality</span></label>
                        <input onChange={(e) => onInputChange(e, "nationality")} type="text" value={studentData.nationality} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Address</span></label>
                        <input onChange={(e) => onInputChange(e, "address")} type="text" value={studentData.address} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input onChange={(e) => onInputChange(e, "email")} type="text" value={studentData.email} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Phone</span></label>
                        <input onChange={(e) => onInputChange(e, "phone")} type="text" value={studentData.phone} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Admission Date</span></label>
                        <input onChange={(e) => onInputChange(e, "admissionDate")} type="text" value={studentData.admissionDate} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Courses</span></label>
                        <input onChange={(e) => onInputChange(e, "courses")} type="text" value={studentData.courses} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input type="submit" className="btn btn-primary w-100 mt-9" />
                    </div>
                </form>
                <Toaster position="top-center" reverseOrder={true} />
            </div>
        </>
    );
};

export default UpdateForm;