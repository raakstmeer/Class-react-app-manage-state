
/* eslint-disable react/prefer-stateless-function */
function ClickCounter(count, incrementCount) {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
}


export DEFAULT_EXTENSIONS