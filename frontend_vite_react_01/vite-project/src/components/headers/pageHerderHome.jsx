import PropTypes from 'prop-types';
const PageHeaderHome = ({ title }) => {
    return (
        <div className="md:w-5/6 mx-auto mt-6 rounded-lg border p-3">
        <div className="text-[#2C4151] text-center">
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
      </div>
    

    )
}
export default PageHeaderHome;

PageHeaderHome.propTypes = {
    title: PropTypes.string
}
