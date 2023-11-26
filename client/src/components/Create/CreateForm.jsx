import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { isEmpty } from "../../Helper/ValidationHelper.js";
import { createStudent } from "../../api/apiService.js";


const CreateForm = () => {
    let firstNameRef, lastNameRef, genderRef, dateOfBirthRef, nationalityRef, addressRef, emailRef, phoneRef, admissionDateRef, coursesRef = useRef();

    const saveData = async (e) => {
        e.preventDefault()
        const firstName = firstNameRef.value;
        const lastName = lastNameRef.value;
        const gender = genderRef.value;
        const dateOfBirth = dateOfBirthRef.value;
        const nationality = nationalityRef.value;
        const address = addressRef.value;
        const email = emailRef.value;
        const phone = phoneRef.value;
        const admissionDate = admissionDateRef.value;
        const courses = coursesRef.value;

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
            const result = await createStudent(firstName, lastName, gender, dateOfBirth, nationality, address, email, phone, admissionDate, courses);
            if (result) {
                toast.success("Data created successfully");
                e.target.reset()
            }
            else {
                toast.error("Failed try again!");
            }
        }
    }

    return (
        <>
            <div className="max-w-7xl mx-auto bg-slate-100 rounded-lg shadow-xl p-5">
                <form className="grid grid-cols-3" onSubmit={saveData}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">First Name</span></label>
                        <input ref={(input) => firstNameRef = input} type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Last Name</span></label>
                        <input ref={(input) => lastNameRef = input} type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Gender</span></label>
                        <input ref={(input) => genderRef = input} type="text" placeholder="Gender" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Date Of Birth</span></label>
                        <input ref={(input) => dateOfBirthRef = input} type="text" placeholder="dd-mm-yyyy" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Nationality</span></label>
                        <input ref={(input) => nationalityRef = input} type="text" placeholder="Nationality" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Address</span></label>
                        <input ref={(input) => addressRef = input} type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input ref={(input) => emailRef = input} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Phone</span></label>
                        <input ref={(input) => phoneRef = input} type="number" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Admission Date</span></label>
                        <input ref={(input) => admissionDateRef = input} type="text" placeholder="dd-mm-yyyy" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Courses</span></label>
                        <input ref={(input) => coursesRef = input} type="text" placeholder="Courses" className="input input-bordered w-full max-w-xs" />
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

export default CreateForm;