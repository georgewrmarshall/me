import { PageProps as GatsbyPageProps } from 'gatsby';

export interface PageProps extends GatsbyPageProps {
  // Add any additional props your pages receive
}

export interface StaticQueryData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
}

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<{
    name: string;
    content: string;
  }>;
  title: string;
}

export interface ImageSharpFluid {
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string;
  srcSetWebp?: string;
  sizes: string;
}

export interface ImageSharpFixed {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string;
  srcSetWebp?: string;
}