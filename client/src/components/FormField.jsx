import React from 'react';




const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900"
      >
        {LabelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;

// import React from 'react';
// import PropTypes from 'prop-types';

// const FormField = ({
//   labelName,
//   type,
//   name,
//   placeholder,
//   value,
//   handleChange,
//   isSurpriseMe,
//   handleSurpriseMe,
// }) => (
//   <div>
//     <div className="flex items-center gap-2 mb-2">
//       <label
//         htmlFor={name}
//         className="block text-sm font-medium text-gray-900"
//       >
//         {labelName}
//       </label>
//       {isSurpriseMe && (
//         <button
//           type="button"
//           onClick={handleSurpriseMe}
//           className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
//         >
//           Surprise me
//         </button>
//       )}
//     </div>
//     <input
//       type={type}
//       id={name}
//       name={name}
//       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
//       placeholder={placeholder}
//       value={value}
//       onChange={handleChange}
//       required
//     />
//   </div>
// );

// // Define PropTypes
// FormField.propTypes = {
//   labelName: PropTypes.string.isRequired, // Label text for the field
//   type: PropTypes.string.isRequired, // Input type (e.g., text, email)
//   name: PropTypes.string.isRequired, // Name attribute of the input
//   placeholder: PropTypes.string, // Placeholder text
//   value: PropTypes.string.isRequired, // Value of the input field
//   handleChange: PropTypes.func.isRequired, // Function to handle input change
//   isSurpriseMe: PropTypes.bool, // Optional boolean to show the "Surprise me" button
//   handleSurpriseMe: PropTypes.func, // Optional function for the "Surprise me" button
// };

// // Default values for optional props
// FormField.defaultProps = {
//   placeholder: '', // Empty placeholder if not provided
//   isSurpriseMe: false, // Default isSurpriseMe to false
//   handleSurpriseMe: null, // Default handleSurpriseMe to null if not provided
// };

// export default FormField;
