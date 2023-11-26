import AppNavbar from "../common/AppNavbar";
import UpdateForm from "../components/Update/UpdateForm";
import { useParams } from 'react-router-dom';

const UpdatePage = () => {
    const {id} = useParams();
    return (
        <>
            <AppNavbar />
            <UpdateForm id={id}/>
        </>
    );
};

export default UpdatePage;