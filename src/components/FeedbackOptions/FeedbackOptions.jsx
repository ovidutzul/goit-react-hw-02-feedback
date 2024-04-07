import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.container}> 
    {Object.keys(options).map(option => (
    <button
      key={option}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
      className={css.button}
    >
        {option}
    </button>
  ))}
  </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}