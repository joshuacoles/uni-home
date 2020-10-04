import React, { MouseEventHandler, ReactNode, Ref } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { format, UrlObject } from "url";

interface LinkProps extends Omit<MuiLinkProps, 'href'> {
  activeClassName?: string
  as?: string | UrlObject
  href: string | UrlObject
  className?: string,
  innerRef?: Ref<any>
  naked?: boolean
  onClick?: MouseEventHandler<HTMLElement>,
  prefetch?: boolean,

  children?: ReactNode
}

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props: LinkProps) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={format(href)} {...other} />;
  }

  return (
    <MuiLink component={NextComposed} className={className} ref={innerRef} href={format(href)} {...other} />
  );
}

const NextComposed = React.forwardRef(function NextComposed(props: NextComposedProps, ref: Ref<any>) {
  const { as, href, ...other } = props;

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

interface NextComposedProps {
  as?: string | UrlObject
  href?: string
  prefetch?: boolean

  className: string
}

export default React.forwardRef((props: LinkProps, ref) => <Link {...props} innerRef={ref} />);
