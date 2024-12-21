import React, { createContext, useContext, useState, ReactNode } from "react";

// pageRender 상태의 타입 정의
interface PageRenderContextType {
  pageRender: boolean;
  setPageRender: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

// 기본값 설정 (초기 상태)
const PageRenderContext = createContext<PageRenderContextType | undefined>(
  undefined
);

interface PageRenderProviderProps {
  children: ReactNode;
}

// Provider 컴포넌트
export const PageRenderProvider = ({ children }: PageRenderProviderProps) => {
  const [pageRender, setPageRender] = useState(true);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <PageRenderContext.Provider
      value={{
        pageRender,
        setPageRender,
        startDate,
        setStartDate,
      }}
    >
      {children}
    </PageRenderContext.Provider>
  );
};

// useContext 훅을 사용하여 다른 컴포넌트에서 Context 값을 사용하기 위한 커스텀 훅
export const usePageRender = (): PageRenderContextType => {
  const context = useContext(PageRenderContext);
  if (!context) {
    throw new Error("usePageRender must be used within a PageRenderProvider");
  }
  return context;
};
