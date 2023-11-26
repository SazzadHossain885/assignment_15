import axios from "axios";

const BaseURL = "http://localhost:5000/api/v1/" 

export const createStudent = async(firstName, lastName, gender, dateOfBirth, nationality, address, email, phone, admissionDate, courses) => {
    try{
        const postBody = {firstName, lastName, gender, dateOfBirth, nationality, address, email, phone, admissionDate, courses}

        const result = await axios.post(BaseURL+"create", postBody)
        if(result.status === 200) return true;
        else return false;
    }
    catch(error){
        console.log(error);
        return false;
    }
}

export const readStudent = async() => {
    try{
        const result = await axios.get(BaseURL+"read");
        if(result.status === 200) return result.data.data;
        else return false;
    }
    catch(error){
        console.log(error);
        return false;
    }
}

export const readStudentById = async(id) => {
    try{
        const result = await axios.get(BaseURL+"readById/"+id);
        if(result.status === 200) return result.data.data;
        else return false;
    }
    catch(error){
        console.log(error);
        return false;
    }
}

export const updateStudent = async(id, firstName, lastName, gender, dateOfBirth, nationality, address, email, phone, admissionDate, courses) => {
    try{
        const postBody = {firstName, lastName, gender, dateOfBirth, nationality, address, email, phone, admissionDate, courses}

        const result = await axios.put(BaseURL+"update/"+id, postBody);
        if(result.status === 200) return true;
        else return false;
    }
    catch(error){
        console.log(error);
        return false;
    }
}

export const deleteStudent = async(id) => {
    try{
        const result = await axios.delete(BaseURL+"delete/"+id);
        if(result.status === 200) return result.data.data;
        else return false;
    }
    catch(error){
        console.log(error);
        return false;
    }
}
