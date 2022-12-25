export default function FilterElement({ title, comment, children, childrenDrop, onChange }) {

    return (
        <>
            <div className={`filters__choices`} >
                <div className="filters__choices-title">{title}</div>
                <div className={`filters__choices-box ${childrenDrop ? "filters__choices-box_drop" : ''}`}>
                    {children}
                    {childrenDrop && childrenDrop}
                </div>
                {comment && (
                <p className='filters__choices-comment'>{comment}</p>
            )}
            </div>
            

        </>
    )
};