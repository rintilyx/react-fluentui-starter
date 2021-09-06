import {Label} from "@fluentui/react";
import {useEffect} from "react";

function HomePage(props) {

    const labelStyles = {
        root: {
            color: props.theme.palette.neutralPrimary
        }
    };

    return (
        <div>
            <Label styles={labelStyles}>Home Page</Label>
        </div>
    )

}

export default HomePage;