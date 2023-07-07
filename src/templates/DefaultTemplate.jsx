import React from "react";
import Header from "../components/Header";
import "../styles/default.css"

const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header/>
            <main className="d-flex flex-col flex-1">
                {children}
            </main>

        </>
    )
}

export default DefaultTemplate