
// components/ModelViewer.tsx
import dynamic from 'next/dynamic';

const ModelViewer = dynamic(
  () => import('@google/model-viewer').then((mod) => ({
    default: ({ style, ...props }: any) => (
      // @ts-expect-error - Web component type issues
      <model-viewer style={style as React.CSSProperties} {...props} />
    ),
  })),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

export default ModelViewer;