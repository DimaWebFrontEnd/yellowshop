

const ListItems = ({checkList}) => {
  return (
    <ul>
      <li className="item">
        <img src={checkList} alt="Check Image" />
        <p>Якісний гіпоалергенний матеріал</p>
      </li>
      <li className="item">
        <img src={checkList} alt="Check Image" />
        <p>Вирівнювання, приховування недоліків</p>
      </li>
      <li className="item">
        <img src={checkList} alt="Check Image" />
        <p>Акція: -50грн на другу покупку</p>
      </li>
    </ul>
  )
}

export default ListItems
