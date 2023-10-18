import Login from "./Login";
import Image from "./Image";

function Container()
{
    return(
        <div style={{display: "flex"}}>
            <Image/>
            <Login/>
        </div>
    );
}

export default Container;