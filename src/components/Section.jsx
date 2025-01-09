import PropTypes from 'prop-types';

function Section({ title, children }) {
   return (
      <div className="section">
         <h1>{title}</h1>
         {children}
      </div>
   );
}

Section.PropTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node,
};

export default Section;