import {
    BOUNDSLANDCOMM,
    BOUNDSLANDINDUSTR,
    BOUNDSBUILDCOMM,
    BOUNDSBUILDINDUSTR    
} from '../../../utils/constants';

const chooseSquereLandIndustry = (
    <>
        <label className="filters__lable">
            <input
                name="indZU"
                className="filters__input-radio"
                type="radio"
                value='li1'
            />
            {`< ${BOUNDSLANDINDUSTR[0]}`}
        </label>
        <label className="filters__lable">
            <input
                name="indZU"
                className="filters__input-radio"
                type="radio"
                value='li2'
            />
            {`${BOUNDSLANDINDUSTR[0]} - ${BOUNDSLANDINDUSTR[1]}`}
        </label>
        <label className="filters__lable">
            <input
                name="indZU"
                className="filters__input-radio"
                type="radio"
                value='li3'
            />
            {`${BOUNDSLANDINDUSTR[1]} - ${BOUNDSLANDINDUSTR[2]}`}
        </label>        
        <label className="filters__lable">
            <input
                name="indZU"
                className="filters__input-radio"
                type="radio"
                value='li4'
            />
            {` > ${BOUNDSLANDINDUSTR[2]}`}
        </label>
    </>
);

const chooseSquereLandOther = (
    <>
        <label className="filters__lable">
            <input
                name="otherZU"
                className="filters__input-radio"
                type="radio"
                value='lc1'
            />
            {`< ${BOUNDSLANDCOMM[0]}`}
        </label>
        <label className="filters__lable">
            <input
                name="otherZU"
                className="filters__input-radio"
                type="radio"
                value='lc2'
            />
            {`${BOUNDSLANDCOMM[0]} - ${BOUNDSLANDCOMM[1]}`}
        </label>
        <label className="filters__lable">
            <input
                name="otherZU"
                className="filters__input-radio"
                type="radio"
                value='lc3'
            />
            {`${BOUNDSLANDCOMM[1]} - ${BOUNDSLANDCOMM[2]}`}
        </label>
        <label className="filters__lable">
            <input
                name="otherZU"
                className="filters__input-radio"
                type="radio"
                value='lc4'
            />
            {`${BOUNDSLANDCOMM[2]} - ${BOUNDSLANDCOMM[3]}`}
        </label>
        <label className="filters__lable">
            <input
                name="otherZU"
                className="filters__input-radio"
                type="radio"
                value='lc5'
            />
            {` > ${BOUNDSLANDCOMM[3]}`}
        </label>
    </>
);

const chooseSquereBuildingIndustry = (
    <>
        <label className="filters__lable">
            <input
                name="indBuld"
                className="filters__input-radio"
                type="radio"
                value='bi1'
            />
            {`< ${BOUNDSBUILDINDUSTR[0]}`}
        </label>
        <label className="filters__lable">
            <input
                name="indBuld"
                className="filters__input-radio"
                type="radio"
                value='bi2'
            />
            {`${BOUNDSBUILDINDUSTR[0]} - ${BOUNDSBUILDINDUSTR[1]}`}
        </label>
        <label className="filters__lable">
            <input
                name="indBuld"
                className="filters__input-radio"
                type="radio"
                value='bi3'
            />
            {`${BOUNDSBUILDINDUSTR[1]} - ${BOUNDSBUILDINDUSTR[2]}`}
        </label>        
        <label className="filters__lable">
            <input
                name="indBuld"
                className="filters__input-radio"
                type="radio"
                value='bi4'
            />
            {` > ${BOUNDSBUILDINDUSTR[2]}`}
        </label>
    </>
);

const chooseSquereBuildingOther = (
    <>
        <label className="filters__lable">
            <input
                name="otherBuld"
                className="filters__input-radio"
                type="radio"
                value='bc1'
            />
            {`< ${BOUNDSBUILDCOMM[0]}`}
        </label>
        <label className="filters__lable">
            <input
                name="otherBuld"
                className="filters__input-radio"
                type="radio"
                value='bc2'
            />
            {`${BOUNDSBUILDCOMM[0]} - ${BOUNDSBUILDCOMM[1]}`}
        </label>
        <label className="filters__lable">
            <input
                name="otherBuld"
                className="filters__input-radio"
                type="radio"
                value='bc3'
            />
            {`${BOUNDSBUILDCOMM[1]} - ${BOUNDSBUILDCOMM[2]}`}
        </label>
        <label className="filters__lable">
            <input
                name="otherBuld"
                className="filters__input-radio"
                type="radio"
                value='bc4'
            />
            {`${BOUNDSBUILDCOMM[2]} - ${BOUNDSBUILDCOMM[3]}`}
        </label>
        <label className="filters__lable">
            <input
                name="otherBuld"
                className="filters__input-radio"
                type="radio"
                value='bc5'
            />
            {` > ${BOUNDSBUILDCOMM[3]}`}
        </label>
    </>
);

export {
    chooseSquereLandIndustry,
    chooseSquereLandOther,
    chooseSquereBuildingIndustry,
    chooseSquereBuildingOther
};