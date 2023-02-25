import { useSelector } from 'react-redux'
import { FavouritesGoods } from './FavouritesGoods/FavouritesGoods'
import { FavouritesIsEmpty } from './FavouritesIsEmpty/FavouritesIsEmpty'

export function Favourites() {
  const favourites = useSelector((store) => store.favourites)

  return (
    <div className="container d-flex flex-grow-1 justify-content-center align-items-center">
      {favourites.length > 0
        ? <FavouritesGoods />
        : <FavouritesIsEmpty />}
    </div>
  )
}
