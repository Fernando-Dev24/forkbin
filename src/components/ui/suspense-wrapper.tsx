import { Suspense } from "react";

interface Props {
  skeletonUI: React.ReactNode;
  children: React.ReactNode;
}

export const SuspenseWrapper = ({ skeletonUI, children }: Props) => {
  return <Suspense fallback={skeletonUI}>{children}</Suspense>;
};
