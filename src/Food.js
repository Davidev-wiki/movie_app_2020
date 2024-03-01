import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
    return (
        <div>
            <h3>I LOVE {name}</h3>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name}/>
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
}

const foodILike = [
    {
        id: 1,
        name: '김치',
        image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
        rating: 5.0,
    },
    {
        id: 2,
        name: '삼겹살',
        image: 'https://cdn-pro-web-247-144.cdn-nhncommerce.com/koreafood373_godomall_com/data/goods/20/02/09/1000000145/1000000145_detail_01.jpg',
        rating: 4.4,
    },
    {
        id: 3,
        name: '비빔밥',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5cT7R_zL4BNYyHnpnMLzDUyCjW_9qGi3LCW65K03xw&s',
        rating: 4.0,
    },
    {
        id: 4,
        name: '돈까스',
        image: 'https://i.namu.wiki/i/aN7eMJzy4XAy1yqpL3kHb41MBsSdfPjt1ZqMfDXYk6J3-je6M8dNVOMldpbxhZ-IlO9IfHXMzpZc1tVvat5IjQ.webp',
        rating: 5.0,
    },
    {
        id: 5,
        name: '김밥',
        image: 'https://static.wtable.co.kr/image/production/service/recipe/689/edd1e01f-4502-453b-8b61-688941aefb76.jpg?size=800x800',
        rating: 4.8,
    },
]

export default Food
export { foodILike }