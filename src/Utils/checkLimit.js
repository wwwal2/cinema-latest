import options from '../components/Settings/Options/OptionsPayload.scss';

export default (current, limit, direction) => {
  if (current === limit) {
    return `${options.arrow} ${options[`${direction}Limit`]}`;
  }
  return `${options.arrow} ${options[direction]}`;
};
