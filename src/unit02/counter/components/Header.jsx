import React from "react";

function HeaderComponent() {
    console.log('Header componet da duoc render');
    return (
        <>
            <header>
                <h1>App counter</h1>
            </header>
        </>
    )
}

export default React.memo(HeaderComponent);