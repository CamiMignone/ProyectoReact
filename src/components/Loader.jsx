import React from "react"
import { SyncLoader } from "react-spinners"

const Loader = () => {
    return (
        <div style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <SyncLoader color="green" size={15} margin={5} />
        </div>
    )
}

export default Loader