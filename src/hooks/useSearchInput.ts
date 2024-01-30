import { useState } from 'react'

const useSearchInput = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleOnChangeSearchValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target
    setSearchValue(value)
  }

  return {
    searchValue,
    handleOnChangeSearchValue,
  }
}

export default useSearchInput
