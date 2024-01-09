export default function Breadcrumbs({year, region, realtyType, purpose, intervalType, minMaxMid } ) {
    return (
        <>
            <h3 className="breadcr__title">
                Выбраны параметры коэффициента торможения:
            </h3>
            <div className="breadcr__container">
                <p className="breadcr__text">{`${year} >`}</p>
                <p className="breadcr__text">{`${region} >`}</p>
                <p className="breadcr__text">{`${realtyType} >`}</p>
                <p className="breadcr__text">{`${purpose} >`}</p>
                <p className="breadcr__text">{`${intervalType} >`}</p>
                <p className="breadcr__text">{`${minMaxMid}`}</p>
            </div>
        </>
    );
}