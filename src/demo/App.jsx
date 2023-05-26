import HeaderComponent from "./components/Header";
import FooterComponents from "./components/Footer";
import ContentComponent from "./components/Content";
import InputComponent from "./components/input/Input";
import ImageComponent from "./components/images/Img";
import Img1 from "../assets/anh1.png";
import Img2 from "../assets/anh2.png";
import Img3 from "../assets/anh3.png";


export default function App() {
    function clickMe() {
        alert('Hi Tien')
    }
    const myChange = event => {
        console.log(event.target.value)
    }
    return (
        <>
            <HeaderComponent />
            <ContentComponent>
                {/* h4 : prop children cua component ContentComponent */}
                <h4>Content</h4>
                {/* prop chilren: ta ca noi dung nam trong the mo va the dong */}

                {/* anh 1 */}
                <ImageComponent
                    w={100}
                    h={100}
                    source={Img1}
                />
                <ImageComponent
                    w={200}
                    h={200}
                    source={Img2}
                />
                <ImageComponent
                    w={300}
                    h={300}
                    source={Img3}
                />
                <br />
                <InputComponent
                    type="text"
                    name="user"
                    change={myChange}
                />
                <InputComponent
                    type="password"
                    name="password"

                />
                <br />
                <button
                    onClick={clickMe}>click me
                </button>


            </ContentComponent>
            <FooterComponents />
        </>
    )
}