import { useState, useEffect, useRef } from "react";

function useAnimationSequence(duration, actions, initialState, initialMeta) {
  const [state, setState] = useState(initialState);

  const _state = useRef(initialState);
  const _meta = useRef(initialMeta);

  useEffect(() => {
    let counter = 0;
    let interval = null;

    function tick() {
      const action = actions.find(({ at }) => at === counter);

      if (action) {
        const nextState = action.reducer(_state.current, [
          _meta.current,
          (meta) => {
            _meta.current = meta;
          },
        ]);

        _state.current = nextState;
        setState(nextState);
      }

      counter += 100;

      if (counter >= duration) {
        counter = 0;
      }
    }

    interval = setInterval(tick, 100);
    tick();

    return () => clearInterval(interval);
  }, []);

  return state;
}

export default useAnimationSequence;
