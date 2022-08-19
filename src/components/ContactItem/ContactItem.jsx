import PropTypes from 'prop-types';

export default function ContactItem({ userName, phone }) {
  return (
    <>
      <span>{userName}: </span>
      <span>{phone} </span>
    </>
  );
}

ContactItem.propTypes = {
  userName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};