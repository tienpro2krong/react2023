
export default function ImageComponent(props) {
    // props tham so duoi dang object
    // nhan tat ca cac du lieu tu cac componnet khac truyen vao
    return (
        <img
            width={props.w}
            height={props.h}
            src={props.source}
        />
    )
}