export default function ChildrenDropMenuIn({value, handlerChange, dataArray})  {
        return (<select className="filters__drop-menu" name="category" value={value} onChange={event => handlerChange(event.target.value)}>
            {dataArray.map((item, i) => {                
                return (<option className={`${!item.isOn && "filters__drop-menu-inactive"}`} key={i} value={item.value} disabled={!item.isOn && 'disabled'} >{item.value}</option>)
            })}
        </select>)
};