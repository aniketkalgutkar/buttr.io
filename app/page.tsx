/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { AppShell } from "./AppShell";
import App from "./App";
import { Redirect } from "@/lib/shared-components/Redirect";

const Page: React.FC = () => {
  
  
  return <Redirect path={"/coming-soon"}/>
  
  // return (
  //   <>
  //     <AppShell />
  //     <App />
  //   </>
  // );
};

export default Page;