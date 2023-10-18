import PropTypes from 'prop-types';
const PageHeader = ({ title }) => {
    return (
    <div>
      <div className=" md:mt-12 mt-10 py-2">
    </div>
    <div className="block md:hidden bg-[#2C4151] text-white text-center  py-2">
      <h1 className="text-xl md:font-semibold">{title}</h1>
    </div>
    </div>  
  


    )
}
export default PageHeader;

PageHeader.propTypes = {
    title: PropTypes.string
}
