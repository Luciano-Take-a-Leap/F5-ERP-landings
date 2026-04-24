import { RichText as TRichText } from '@/landing-corralon/types/sanity.types';
import { cn } from '@ui/src/lib/utils';
import { PortableText, PortableTextReactComponents } from 'next-sanity';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkAnnotation {
  _type: 'link';
  href: string;
  blank?: boolean;
}

interface TextSettingsAnnotation {
  _type: 'textSettings';
  lineHeight?: 'normal' | 'relaxed' | 'tight';
  highlightBox?: 'none' | 'white' | 'black' | 'orange' | 'blue' | 'dark-blue';
  textColor?: 'black' | 'white' | 'primary';
  fontFamily?: 'inter';
}

interface RichTextProps {
  value?: TRichText;
  className?: string;
  textClassName?: string;
}

const CustomLink = ({
  value,
  children,
}: {
  value?: LinkAnnotation;
  children: ReactNode;
  animate?: boolean;
  delay?: number;
}) => {
  const { href, blank } = value || {};
  const target = blank ? '_blank' : undefined;
  const rel = blank ? 'noopener noreferrer' : undefined;

  const linkContent = (
    <Link
      href={href || '#'}
      target={target}
      title="external link"
      rel={rel}
      className="text-blue-600 hover:text-blue-800 underline transition-colors"
    >
      {children}
    </Link>
  );

  if (href?.startsWith('/')) {
    return linkContent;
  }

  const externalLinkContent = (
    <a
      href={href}
      target={target}
      title="external link"
      rel={rel}
      className="text-blue-600 hover:text-blue-800 underline transition-colors"
    >
      {children}
    </a>
  );

  return externalLinkContent;
};

const TextSettingsWrapper = ({
  value,
  children,
}: {
  value?: TextSettingsAnnotation;
  children: ReactNode;
}) => {
  const {
    lineHeight = 'normal',
    highlightBox = 'none',
    textColor = 'black',
    fontFamily = '',
  } = value || {};

  const getLineHeightClass = (lineHeight: string) => {
    switch (lineHeight) {
      case 'relaxed':
        return 'leading-relaxed';
      case 'tight':
        return 'leading-tight';
      case 'normal':
      default:
        return 'leading-normal';
    }
  };

  const getHighlightStyles = (style: string) => {
    if (style === 'none') return '';

    const baseClasses = 'p-4 rounded-xl flex';

    switch (style) {
      case 'white':
        return `${baseClasses} bg-white`;
      case 'black':
        return `${baseClasses} bg-black`;
      case 'orange':
        return `${baseClasses} bg-orange`;
      case 'blue':
        return `${baseClasses} bg-blue`;
      case 'dark-blue':
        return `${baseClasses} bg-dark-blue`;
      default:
        return '';
    }
  };

  const getTextColorClass = (color: string) => {
    switch (color) {
      case 'black':
        return 'text-black';
      case 'white':
        return 'text-white';
      case 'primary':
        return 'text-primary';
      case 'gray':
        return 'text-muted-foreground';
      default:
        return 'text-white';
    }
  };

  const getFontFamilyClass = (font: string) => {
    switch (font) {
      case 'inter':
        return 'font-inter';
      case '':
        return '';
      default:
        return 'inter';
    }
  };

  const combinedClasses = [
    getLineHeightClass(lineHeight),
    getTextColorClass(textColor),
    getFontFamilyClass(fontFamily),
    getHighlightStyles(highlightBox),
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={combinedClasses}>{children}</span>;
};

export default function RichText({
  value,
  className = '',
  textClassName = '',
}: RichTextProps) {
  if (!value || !Array.isArray(value)) {
    return null;
  }

  const createComponents = (): Partial<PortableTextReactComponents> => ({
    block: {
      normal: ({ children }) => {
        return (
          <p className={cn('leading-relaxed font-inter text-white', textClassName)}>
            {children}
          </p>
        );
      },
      h1: ({ children }) => {
        return (
          <h1
            className={cn('text-4xl leading-tight font-inter text-white', textClassName)}
          >
            {children}
          </h1>
        );
      },
      h2: ({ children }) => {
        return (
          <h2
            className={cn('text-3xl leading-tight font-inter text-white', textClassName)}
          >
            {children}
          </h2>
        );
      },
      h3: ({ children }) => {
        return (
          <h3
            className={cn('text-2xl leading-tight font-inter text-white', textClassName)}
          >
            {children}
          </h3>
        );
      },
      h4: ({ children }) => {
        return (
          <h4
            className={cn(
              'text-xl font-normal leading-tight font-inter text-white',
              textClassName
            )}
          >
            {children}
          </h4>
        );
      },
      h5: ({ children }) => {
        return (
          <h5
            className={cn(
              'text-lg font-normal leading-tight font-inter text-white',
              textClassName
            )}
          >
            {children}
          </h5>
        );
      },
      h6: ({ children }) => {
        return (
          <h6
            className={cn(
              'text-base font-normal leading-tight font-inter text-white',
              textClassName
            )}
          >
            {children}
          </h6>
        );
      },
      blockquote: ({ children }) => {
        return (
          <blockquote
            className={cn(
              'border-l-4 border-gray-300 pl-4 py-2 my-6 italic text-gray-700 bg-gray-50 rounded-r-lg font-inter',
              textClassName
            )}
          >
            {children}
          </blockquote>
        );
      },
      code: ({ children }) => {
        return (
          <pre
            className={cn(
              'bg-gray-900 text-green-400 p-4 rounded-lg my-4 overflow-x-auto',
              textClassName
            )}
          >
            <code className="text-sm font-mono">{children}</code>
          </pre>
        );
      },
    },
    list: {
      bullet: ({ children }) => {
        return (
          <ul
            className={cn(
              'list-disc list-inside space-y-2 font-inter text-white',
              textClassName
            )}
          >
            {children}
          </ul>
        );
      },
      number: ({ children }) => {
        return (
          <ol
            className={cn(
              'list-decimal list-inside space-y-2 font-inter text-white',
              textClassName
            )}
          >
            {children}
          </ol>
        );
      },
    },
    listItem: {
      bullet: ({ children }) => (
        <li className={cn('leading-relaxed font-inter text-white', textClassName)}>
          {children}
        </li>
      ),
      number: ({ children }) => (
        <li className={cn('leading-relaxed font-inter text-white', textClassName)}>
          {children}
        </li>
      ),
    },
    marks: {
      'extra-bold': ({ children }) => (
        <strong className="font-extrabold">{children}</strong>
      ),
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      underline: ({ children }) => <span className="underline">{children}</span>,
      code: ({ children }) => (
        <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      ),
      link: ({ value, children }) => {
        return <CustomLink value={value as LinkAnnotation}>{children}</CustomLink>;
      },
      textSettings: ({ value, children }) => {
        return (
          <TextSettingsWrapper value={value as TextSettingsAnnotation}>
            {children}
          </TextSettingsWrapper>
        );
      },
    },
  });

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <PortableText value={value} components={createComponents()} />
    </div>
  );
}
