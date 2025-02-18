import '@google/model-viewer';
import type { ModelViewerElement } from '@google/model-viewer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': Partial<ModelViewerElement> & React.HTMLAttributes<ModelViewerElement>;
    }
  }
}