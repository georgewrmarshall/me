declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module 'confetti-js' {
  interface ConfettiOptions {
    target?: string | HTMLElement;
    max?: number;
    size?: number;
    animate?: boolean;
    props?: string[];
    colors?: string[][];
    clock?: number;
    rotate?: boolean;
    width?: number;
    height?: number;
    start_from_edge?: boolean;
    respawn?: boolean;
  }

  class ConfettiGenerator {
    constructor(options: ConfettiOptions);
    render(): void;
    clear(): void;
  }

  export = ConfettiGenerator;
}