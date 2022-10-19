import { FunctionComponent, ReactNode } from 'react';
import Header from "../../navigation/header/Header";

export interface IMainLayout {
  children: ReactNode
}

const MainLayout: FunctionComponent<IMainLayout> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout
