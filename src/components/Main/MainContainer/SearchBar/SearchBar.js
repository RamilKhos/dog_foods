import style from './searchBarStyles.module.scss'

export function SearchBar() {
  return (
    <div className={`${style.search__container}`}>
      <input className={`${style.search__input}`} type="text" placeholder="Search" />
      <button type="button">
        <i className={`${style.magnifier} fa-solid fa-magnifying-glass text-white fs-5`} />
      </button>
    </div>
  )
}
