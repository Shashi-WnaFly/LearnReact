

const CategoryItems = ({list}) => {
    const items = list?.card?.card?.itemCards;
    console.log(items)
    return (
    <div>
        {
            items.map((item) => <h3 key={item?.card?.info?.id}>{item?.card?.info?.name}</h3>)
        }
    </div>
    )
}

export default CategoryItems;