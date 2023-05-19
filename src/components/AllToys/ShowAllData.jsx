/* eslint-disable react/prop-types */


const ShowAllData = ({data}) => {
    const {title} = data; 
    return (
        <div>
            <h2>Name: {title}</h2>
        </div>
    );
};

export default ShowAllData;