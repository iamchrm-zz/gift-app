import React from "react";

export const useFormCustomHook = () => {
  return (
    <form>
      <h1> Form with custom form hook</h1>

      <input type="text" name="name" placeholder="Set your name" onChange={}/>
        <hr />
        <input type="text" name="email" placeholder="your@email.com" onChange={}/>

    
    </form>
  );
};
