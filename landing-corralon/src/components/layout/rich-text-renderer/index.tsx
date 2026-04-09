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
  animate?: boolean;
  delayStart?: number;
  delayIncrement?: number;
  smallFont?: boolean;
}

let delayCounter = 0;

const resetDelayCounter = () => {
  delayCounter = 0;
};

const getNextDelay = (start: number, increment: number) => {
  const delay = start + delayCounter * increment;
  delayCounter++;
  return delay;
};

const CustomLink = ({
  value,
  children,
  animate = false,
  delay = 0,
}: {
  value?: LinkAnnotation;
  children: ReactNode;
  animate?: boolean;
  delay?: number;
}) => {
  const { href, blank } = value || {};
  const target = blank ? '_blank' : undefined;
  const rel = blank ? 'noopener noreferrer' : undefined;

  const animationProps = animate
    ? {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { delay, duration: 0.7 },
      }
    : {};

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
    return animate ? <span {...animationProps}>{linkContent}</span> : linkContent;
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

  return animate ? (
    <span {...animationProps}>{externalLinkContent}</span>
  ) : (
    externalLinkContent
  );
};

const TextSettingsWrapper = ({
  value,
  children,
  animate = false,
  delay = 0,
}: {
  value?: TextSettingsAnnotation;
  children: ReactNode;
  animate?: boolean;
  delay?: number;
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

  const animationProps = animate
    ? {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { delay, duration: 0.7 },
      }
    : {};

  return animate ? (
    <span className={combinedClasses} {...animationProps}>
      {children}
    </span>
  ) : (
    <span className={combinedClasses}>{children}</span>
  );
};

export default function RichText({
  value,
  className = '',
  animate = false,
  delayStart = 0.7,
  delayIncrement = 0.1,
  smallFont = false,
}: RichTextProps) {
  if (!value || !Array.isArray(value)) {
    return null;
  }

  if (animate) {
    resetDelayCounter();
  }

  const createComponents = (): Partial<PortableTextReactComponents> => ({
    block: {
      normal: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <p
            className={cn(
              'leading-relaxed font-montserrat text-black',
              smallFont && 'text-md'
            )}
            {...animationProps}
          >
            {children}
          </p>
        ) : (
          <p className="leading-relaxed font-montserrat text-black">{children}</p>
        );
      },
      h1: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <h1
            className="text-4xl leading-tight font-montserrat text-black"
            {...animationProps}
          >
            {children}
          </h1>
        ) : (
          <h1 className="text-4xl leading-tight font-montserrat text-black">
            {children}
          </h1>
        );
      },
      h2: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <h2
            className="text-3xl leading-tight font-montserrat text-black"
            {...animationProps}
          >
            {children}
          </h2>
        ) : (
          <h2 className="text-3xl leading-tight font-montserrat text-black">
            {children}
          </h2>
        );
      },
      h3: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <h3
            className="text-2xl leading-tight font-montserrat text-black"
            {...animationProps}
          >
            {children}
          </h3>
        ) : (
          <h3 className="text-2xl leading-tight font-montserrat text-black">
            {children}
          </h3>
        );
      },
      h4: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <h4
            className="text-xl font-normal leading-tight font-montserrat text-black"
            {...animationProps}
          >
            {children}
          </h4>
        ) : (
          <h4 className="text-xl font-normal leading-tight font-montserrat text-black">
            {children}
          </h4>
        );
      },
      h5: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <h5
            className="text-lg font-normal leading-tight font-montserrat text-black"
            {...animationProps}
          >
            {children}
          </h5>
        ) : (
          <h5 className="text-lg font-normal leading-tight font-montserrat text-black">
            {children}
          </h5>
        );
      },
      h6: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <h6
            className="text-base font-normal leading-tight font-montserrat text-black"
            {...animationProps}
          >
            {children}
          </h6>
        ) : (
          <h6 className="text-base font-normal leading-tight font-montserrat text-black">
            {children}
          </h6>
        );
      },
      blockquote: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <blockquote
            className="border-l-4 border-gray-300 pl-4 py-2 my-6 italic text-gray-700 bg-gray-50 rounded-r-lg font-montserrat"
            {...animationProps}
          >
            {children}
          </blockquote>
        ) : (
          <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-6 italic text-gray-700 bg-gray-50 rounded-r-lg font-montserrat">
            {children}
          </blockquote>
        );
      },
      code: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <pre
            className="bg-gray-900 text-green-400 p-4 rounded-lg my-4 overflow-x-auto"
            {...animationProps}
          >
            <code className="text-sm font-mono">{children}</code>
          </pre>
        ) : (
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg my-4 overflow-x-auto">
            <code className="text-sm font-mono">{children}</code>
          </pre>
        );
      },
    },
    list: {
      bullet: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <ul
            className="list-disc list-inside space-y-2 font-montserrat text-black"
            {...animationProps}
          >
            {children}
          </ul>
        ) : (
          <ul className="list-disc list-inside space-y-2 font-montserrat text-black">
            {children}
          </ul>
        );
      },
      number: ({ children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        const animationProps = animate
          ? {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay, duration: 0.7 },
            }
          : {};

        return animate ? (
          <ol
            className="list-decimal list-inside space-y-2 font-montserrat text-black"
            {...animationProps}
          >
            {children}
          </ol>
        ) : (
          <ol className="list-decimal list-inside space-y-2 font-montserrat text-black">
            {children}
          </ol>
        );
      },
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="leading-relaxed font-montserrat text-black">{children}</li>
      ),
      number: ({ children }) => (
        <li className="leading-relaxed font-montserrat text-black">{children}</li>
      ),
    },
    marks: {
      'extra-bold': ({ children }) => <strong className="font-extrabold">{children}</strong>,
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      underline: ({ children }) => <span className="underline">{children}</span>,
      code: ({ children }) => (
        <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      ),
      link: ({ value, children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        return (
          <CustomLink value={value as LinkAnnotation} animate={animate} delay={delay}>
            {children}
          </CustomLink>
        );
      },
      textSettings: ({ value, children }) => {
        const delay = animate ? getNextDelay(delayStart, delayIncrement) : 0;
        return (
          <TextSettingsWrapper
            value={value as TextSettingsAnnotation}
            animate={animate}
            delay={delay}
          >
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
