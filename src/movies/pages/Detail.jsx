import React, { useState, useEffect } from "react";
import LayoutMovies from '../components/Layout';
import { Row, Col, Image, Typography, Skeleton, Button } from "antd";
import { HeartFilled, FrownFilled } from '@ant-design/icons';
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { helpers } from "../helpers";
import YouTube from 'react-youtube';
import { useAuth } from "../hooks/useAuth";

// import ModalVideo from 'react-modal-video';
// import 'react-modal-video/css/modal-video.min.css';

const { Title, Paragraph } = Typography;

const DetailMovies = () => {
    const { slug, id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);
    const [favorite, setFavorite] = useState(helpers.checkDataMoviesLocalStorage(id))
    // const [isOpen, setOpen] = useState(false);
    const { user } = useAuth(); // lay thong tin cua nguoi dung da dang nhap va duoc luu trong localstorage

    const navigate = useNavigate();

    const opts = {
        height: '320',
        width: '440',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }

    const addMovie = () => {
        if (!user) {
            // chua dang nhap
            alert('Ban chua dang nhap')
            navigate('/login');
        } else {
            // luu thong tin cua bo phim vao localstorage
            // console.log('movie', movie);
            helpers.addDataMovieToLocalStorage(movie);
            setFavorite(true);
        }
    }

    const removeMovie = (idMovie) => {
        if (!user) {
            navigate('/login');
        } else {
            helpers.removeMovieLocalStorageById(idMovie);
            setFavorite(false);
        }
    }

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await api.getDataMovieById(id);
            if (helpers.isEmtyObject(data)) {
                //ko co du lieu
                setError({
                    code: 404,
                    mess: "Not found data"
                })
            }
            else {
                //co du lieu
                setMovie(data);
                setError(null);

            }
            setLoading(false);
        }
        getData();
    }, [id]);// id ma thay doi useEffect se chay lai

    if (loading) {
        return (
            <LayoutMovies
                level1="Trang chu"
                level2="Chi tiet"
                level3={slug}
            >
                <Row>
                    <Col span={24}>
                        <Skeleton active />

                    </Col>
                </Row>
            </LayoutMovies>
        )
    }
    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Chi tiet"
            level3={slug}
        >
            <Row
            >
                <Col span={24}>
                    <h4>Movie detail</h4>
                    <Row>
                        <Col span={8}>
                            <div style={{ padding: '10px' }}>
                                <Image src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
                                <Typography>
                                    <Title style={{ fontSize: '24px', textAlign: 'center', marginRight: '40px' }}>
                                        {movie.original_title}
                                    </Title>
                                </Typography>

                                {
                                    favorite ?
                                        (
                                            <Button
                                                danger
                                                onClick={() => removeMovie(id)}
                                            >
                                                <FrownFilled style={{ color: 'hotpink' }} />
                                                Bo thich
                                            </Button>
                                        )
                                        :
                                        (
                                            <Button
                                                danger
                                                onClick={() => addMovie()}
                                            >
                                                <HeartFilled style={{ color: 'hotpink' }} />
                                                Yeu thich
                                            </Button>
                                        )

                                }

                            </div>
                        </Col>
                        <Col span={8} style={{ padding: '10px' }}>
                            <h3>Noi dung</h3>
                            <Typography>
                                <Paragraph>
                                    {movie.overview}
                                </Paragraph>
                            </Typography>
                            {/* <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around'
                            }}
                            >
                                {
                                    movie['videos']['results'].map((item, index) => (
                                        <p key={index}>
                                            <ModalVideo
                                                channel='youtube'
                                                autoplay
                                                isOpen={isOpen}
                                                videoId={item.key}
                                                onClose={() => setOpen(false)}
                                            />
                                            <Button
                                                type="primary"
                                                onClick={() => setOpen(true)}
                                            >
                                                Trailer {index + 1}
                                            </Button>
                                        </p>
                                    ))
                                }
                            </div> */}
                            {/*                             
                            {
                                movie['videos']['results'].map((item, index) => (
                                    <div key={index} style={{ marginBottom: '5px' }}>
                                        <YouTube
                                            videoId={item.key}
                                            opts={opts}
                                            onReady={onPlayerReady}
                                        />
                                    </div>
                                ))
                            } */}

                        </Col>
                        <Col span={8} style={{ padding: '10px' }}>
                            <h3>Images Movie</h3>
                            {
                                movie['images']['backdrops'].map((item, index) => (
                                    <div key={index} style={{ marginBottom: '5px' }}>
                                        <Image src={`https://image.tmdb.org/t/p/w400/${item.file_path}`} />
                                    </div>
                                ))
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(DetailMovies);