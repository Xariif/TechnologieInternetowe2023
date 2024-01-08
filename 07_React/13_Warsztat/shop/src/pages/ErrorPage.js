import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect    (
        () => {
            setTimeout(() => navigate('/'), 3000);
        },
        []
    );

    return (
        <div style={{display:'flex', textAlign:'center', flexDirection:'column', backgroundColor:'#D84C7E' ,height:'100vh', justifyContent:'center', alignItems:'center'}}>
            <h1 style={{color:"white"}}>Upss coś poszło nie tak :/</h1>
            <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png" alt="404" />
        </div>
    );
};

export default ErrorPage;
