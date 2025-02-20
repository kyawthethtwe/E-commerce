

// types/model-viewer.d.ts
import '@google/model-viewer';
import type { ModelViewerElement } from '@google/model-viewer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': Omit<Partial<ModelViewerElement>, 'style'> & {
        style?: React.CSSProperties;
        class?: string;
        ref?: React.Ref<ModelViewerElement>;
      } & React.HTMLAttributes<ModelViewerElement>;
    }
  }
}