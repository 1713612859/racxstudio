import React, { useState } from "react";
import Fade  from "react-awesome-reveal";

export default function POS() {
  const [count, setCount]  = useState(0);
    
  return (
      <div className=""> 
          <Fade direction="down">
              <div className="flex items-center justify-center gap-6">
                  <button
                    className="text-3xl bg-amber-400 hover:bg-amber-500 w-14 h-14 rounded-full shadow-md transition duration-300"
                    type="button"
                    onClick={() => { setCount(count + 1); }}
                  >
                      +
                  </button>

                  <span className="text-4xl font-bold min-w-[60px] text-center">{count}</span>

                  <button
                    className="text-3xl bg-amber-400 hover:bg-amber-500 w-14 h-14 rounded-full shadow-md transition duration-300"
                    type="button"
                    onClick={() => {
                      if (count > 0) setCount(count - 1);
                      else setCount(0);
                    }}
                  >
                      -
                  </button>
              </div>
          </Fade>
      </div>
   
  );
}
