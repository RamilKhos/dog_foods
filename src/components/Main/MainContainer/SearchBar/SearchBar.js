import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFilterContextMethods } from '../../../FilterContext/FilterContextProvider'
import { useDebounce } from '../useDebounce/useDebounce'
import style from './searchBarStyles.module.scss'

// export const CONTACTS_QUERY_KEY = ['CONTACTS_QUERY_KEY']
// const getContactsQueryKey = (filters) => CONTACTS_QUERY_KEY.concat(Object.values(filters))
// const getAllProducts = (filters) => {
//   const token = localStorage.getItem(TOKEN_KEY_IN_LS)
//   if (token) {
//     return fetch(
//       `https://api.react-learning.ru/products/?${new URLSearchParams(filters).toString()}`,
//       { headers: { authorization: `Bearer ${JSON.parse(token)}` } },
//     ).then((res) => res.json())
//   }
//   return null
// }

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [input, setInput] = useState(() => searchParams.get('q') ?? '')
  const { setSearch } = useFilterContextMethods()
  const debounceValue = useDebounce(input, 300)

  useEffect(() => {
    setSearchParams({ q: input })
  }, [input])

  useEffect(() => {
    setSearch(debounceValue)
  }, [debounceValue])

  return (
    <div className={`${style.search__container}`}>
      <input onChange={((e) => setInput(e.target.value))} className={`${style.search__input}`} type="text" placeholder="Search" />
      <button type="button">
        <i className={`${style.magnifier} fa-solid fa-magnifying-glass text-white fs-5`} />
      </button>
    </div>
  )
}
