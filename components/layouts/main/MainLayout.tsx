import { FunctionComponent, ReactNode } from 'react';

export interface IMainLayout {
  children: ReactNode
}

const MainLayout: FunctionComponent<IMainLayout> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
