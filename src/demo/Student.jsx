import Img1 from "../assets/anh1.png";
import Img2 from "../assets/anh2.png";
import Img3 from "../assets/anh3.png";

export default function Students() {
    const show = true;
    const dataStudent = [
        {
            id: 1,
            name: 'Tien',
            phone: '09898',
            gender: 0,
            img: Img1,
            showLogo: false
        },
        {
            id: 2,
            name: 'Ti',
            phone: '08787',
            gender: 1,
            img: Img2,
            showLogo: true
        },
        {
            id: 3,
            name: 'Teo',
            phone: '097889',
            gender: 0,
            img: Img3,
            showLogo: false
        },
        {
            id: 4,
            name: 'Tu',
            phone: '0867876',
            gender: 1,
            img: Img1,
            showLogo: true
        }
    ];

    const renderRows = (index) => {
        return (index + 1) % 2 == 0 ? { backgroundColor: "#ccc" } : { backgroundColor: "yellow" }
    }

    if (!show) {
        return (
            <>
                <p>Khong co ket qua</p>
            </>
        )
    }

    return (
        <>
            <h1>Danh sach sinh vien</h1>
            <table
                width="100%"
                border={1}
                cellPadding={0}
                cellSpacing={0}>
                <thead>
                    <tr>
                        <th>MSV</th>
                        <th>Ho ten</th>
                        <th>SDT</th>
                        <th>Gioi tinh</th>
                        <th>Anh</th>
                    </tr>
                </thead>
                <tbody>
                    {dataStudent.map((item, index) => (
                        <tr
                            key={index}
                            style={renderRows(index)}
                        >
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.gender == 1 ? 'Nam' : 'Nu'}</td>
                            <td>
                                {
                                    item.showLogo === true ?
                                        <img width={100} height={100} src={item.img} alt="" />
                                        : ''
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}