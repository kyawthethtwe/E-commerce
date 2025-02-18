// import dynamic from 'next/dynamic';

// const ModelViewer = dynamic(
//   async () => {
//     const mod = await import('@google/model-viewer');
//     return mod as any;  // Type assertion needed due to model-viewer's types
//   },
//   {
//     ssr: false,
//     loading: () => <div>Loading 3D viewer...</div>,
//   }
// );

// export default ModelViewer;
import dynamic from 'next/dynamic';
declare module '@google/model-viewer' {
  interface ModelViewerProps {
    src: string;
    alt: string;
    ar?: boolean;
    'ar-modes'?: string;
    'camera-controls'?: boolean;
    'shadow-intensity'?: string;
    'auto-rotate'?: boolean;
    style?: React.CSSProperties;
  }

  const ModelViewer: React.ComponentType<ModelViewerProps>;
  export default ModelViewer;
}

const ModelViewer = dynamic<any>(
  async () => {
    const mod = await import('@google/model-viewer');
    return mod;
  },
  {
    ssr: false,
    loading: () => <div>Loading 3D viewer...</div>,
  }
);

export default ModelViewer;