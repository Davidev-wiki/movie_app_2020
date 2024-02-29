import React from "react";

function Food({name, picture}) {
    return (
        <div>
            <h3>I LOVE {name}</h3>
            <img src={picture}/>
        </div>
    )
}

function renderFood(dish) {
    return <Food name={dish.name} picture={dish.image} />
}
const foodILike = [
    {
        name: '김치',
        image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    },
    {
        name: '삼겹살',
        image: 'https://cdn-pro-web-247-144.cdn-nhncommerce.com/koreafood373_godomall_com/data/goods/20/02/09/1000000145/1000000145_detail_01.jpg',
    },
    {
        name: '비빔밥',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5cT7R_zL4BNYyHnpnMLzDUyCjW_9qGi3LCW65K03xw&s',
    },
    {
        name: '돈까스',
        image: 'https://i.namu.wiki/i/aN7eMJzy4XAy1yqpL3kHb41MBsSdfPjt1ZqMfDXYk6J3-je6M8dNVOMldpbxhZ-IlO9IfHXMzpZc1tVvat5IjQ.webp',
    },
    {
        name: '김밥',
        image: 'https://static.wtable.co.kr/image/production/service/recipe/689/edd1e01f-4502-453b-8b61-688941aefb76.jpg?size=800x800',
    },
]

export default Food
export { foodILike, renderFood }