import withCounter from './withCounter';

function ClickCounter(props) {
  const { incrementCount, count } = props;
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default withCounter(ClickCounter);
