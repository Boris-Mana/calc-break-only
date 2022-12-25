export default function ChildrenRadioInItem({ name, value, text, isDisable, handlerOnChange}) {    
    return(
        <label className={`filters__lable ${isDisable && "filters__lable_disabled"}`}>
                <input
                    name={name}
                    className="filters__input-radio"
                    type="radio"
                    value={value}
                    // checked={currentValue === value}
                    onChange={handlerOnChange}
                    disabled={isDisable && 'disabled'}
                />
                {text}
        </label>
    );
}
