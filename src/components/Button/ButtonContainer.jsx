import s from './Button.module.scss'
import { Button } from "./Button"
import { useState } from 'react'

const ButtonContainer = () => {
  const [btnsArr, setBtnsArr] = useState([
    {
      id: 1,
      name: 1,
      isSelected: true
    },
    {
      id: 2,
      name: 2,
      isSelected: false
    },
    {
      id: 3,
      name: 3,
      isSelected: false
    },
    {
      id: 4,
      name: 4,
      isSelected: false
    }
  ])
  const [isOpenList, setIsOpenList] = useState(false)
  const selectNewBtn = id => {
    const newBtnsArr = btnsArr.map(item => {
      if (item.id == id) {
        return { ...item, isSelected: true }
      } else {
        return { ...item, isSelected: false }
      }
    })
    setBtnsArr(newBtnsArr)
    setIsOpenList(false)
  }
  const toggleList = () => {
    setIsOpenList(!isOpenList)
  }
  const notSelectedBtns = btnsArr.filter(item => !item.isSelected)
  const btnsElements = notSelectedBtns.map(item => {
    return <Button clickHandler={selectNewBtn} id={item.id} key={item.id} name={item.name} />
  })
  const selectedBtn = btnsArr.filter(item => item.isSelected)[0]
  return (
    <>
      <div className={s.selected}>
        <h1>Выбрать кнопку</h1>
        {selectedBtn.isSelected ? <Button clickHandler={toggleList} name={selectedBtn.name} /> : ''}
      </div>
      {isOpenList ?
        <div className={s.list}>
          {btnsElements}
        </div> : ''}
    </>
  )
}

export default ButtonContainer