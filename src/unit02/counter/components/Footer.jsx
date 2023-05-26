import React from "react";

function FooterComponent() {
    console.log('Footer componet da duoc render');
    return (
        <>
            <footer>
                <p>This is footer</p>
            </footer>
        </>
    )
}

export default React.memo(FooterComponent);