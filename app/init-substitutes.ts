import { InteractiveApp } from "./components/InteractiveApp/InteractiveApp";
import { EmailSubscribe } from "./components/EmailSubscribe";
import type { PlasmicComponentLoader } from "@plasmicapp/loader-react";

export function substitute(plasmic: PlasmicComponentLoader) {
  plasmic.substituteComponent(InteractiveApp, "InteractiveApp");
  plasmic.substituteComponent(EmailSubscribe, "EmailSubscribe");
}
