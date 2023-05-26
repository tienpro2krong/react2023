
export default function ContentComponent({ children }) {
    // {children} : destructring assigment object
    // reactjs thi goi la prop children
    return (
        <>
            <main>
                {/* {} hien thi data  */}
                {children}
            </main>
        </>
    )

}