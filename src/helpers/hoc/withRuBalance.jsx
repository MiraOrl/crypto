/*eslint-disable react/display-name */
export const withRuBalance = (Component) => {
  return (props) => {
    const { balance } = props;
    const ruBalance = balance * 90;
    return <Component {...props} ruBalance={ruBalance} />;
  };
};
