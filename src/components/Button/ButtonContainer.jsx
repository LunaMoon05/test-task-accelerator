import s from './Button.module.scss'
import { Button } from "./Button"
import { useState } from 'react'

const ButtonContainer = () => {
  const [btnsArr, setBtnsArr] = useState([ // Массив всех кнопок
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
  const [isOpenList, setIsOpenList] = useState(false) // Состояние списка кнопок: открыт список или закрыт
  const selectNewBtn = id => { // Выбрать новую кнопку, в id передать id кнопки
    const newBtnsArr = btnsArr.map(item => {
      if (item.id == id) {
        return { ...item, isSelected: true } // isSelected - выбрана кнопка или нет
      } else {
        return { ...item, isSelected: false }
      }
    })
    setBtnsArr(newBtnsArr) // Обновляем массив кнопок
    setIsOpenList(false) // Закрываем список кнопок
  }
  const toggleList = () => { // Раскрываем/закрываем список кнопок
    setIsOpenList(!isOpenList)
  }
  const notSelectedBtns = btnsArr.filter(item => !item.isSelected) // Возвращаем массив со всеми не выбранными кнопками
  const btnsElements = notSelectedBtns.map(item => { // Возвращаем компонент Button на каждую не выбранную кнопку
    return <Button clickHandler={selectNewBtn} id={item.id} key={item.id} name={item.name} />
  })
  const selectedBtn = btnsArr.filter(item => item.isSelected)[0] // Текущая выбранная кнопка

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