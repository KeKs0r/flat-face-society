import { PlasmicComponent } from "@plasmicapp/loader-react";
import { useState } from "react";

export function EmailSubscribe() {
  const [email, setEmail] = useState("");
  return (
    <PlasmicComponent
      component="EmailSubscribe"
      // Ask Plasmic to use the original, Plasmic-generated
      // EmailSubscribeForm component
      forceOriginal
      componentProps={{
        root: {
          as: "form",
          props: {
            // add an onSubmit handler to the root form element
            onSubmit: () => console.log(email),
          },
        },
        input: {
          // Control the input element value with React state
          props: {
            value: email,
            onChange: (e) => {
              console.log("onChange", e.target.value);
              setEmail(e.target.value);
            },
          },
        },
      }}
    />
  );
}
