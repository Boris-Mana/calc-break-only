export default function ChildrenDropMenuIn({ name, value}) {
    return(
        <>
            <label className="filters__lable">
                <input                    
                    name={name}
                    className="filters__input-text "
                    type='text'
                    value={value}
                    // onChange={(e) => setYear(e.target.value)}
                />                
            </label>
        </>
    );
}
