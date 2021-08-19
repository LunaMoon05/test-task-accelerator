import s from './Button.module.scss'

export const Button = props => {
  const { name, clickHandler, id } = props
  return (
    <button onClick={e => clickHandler(id)} className={s.btn}>{name}</button>
  )
}