import { LinkComponent, Link as TanLink } from '@tanstack/react-router';
import useLocaleStore from '../stores/localeStore';

type LinkProps = LinkComponent<'a'>;
type HtmlLinkElement = Omit<HTMLAnchorElement, 'children'>;

export default function Link(
    props: Omit<LinkProps, 'to'> &
        Partial<HtmlLinkElement> & {
            to: string;
            children: React.ReactNode;
        }
) {
    const locale = useLocaleStore.use.locale();

    return (
        // @ts-ignore
        <TanLink {...props} to={`/${locale}${props.to}`}>
            {props.children}
        </TanLink>
    );
}
