
import danmcodeOnlyLogo from '../../../assets/icons/damncode-only-logo.png';
import danmcodeLogo from '../../../assets/icons/damncode-logo-large.png';

interface BrandingProps {
    isCollapsed?: boolean;
}

export const Branding = ({ isCollapsed }: BrandingProps) => {

    if (!isCollapsed) {
        return (
            <div className="w-32 h-32 rounded-full flex items-center justify-center">
                <img
                    src={danmcodeLogo}
                    alt="Danmcode Finance"
                    width={100}
                />
            </div>
        )
    }

    return (
        <div className="w-15 h-15  rounded-full flex items-center justify-center">
            <img
                src={danmcodeOnlyLogo}
                alt="DF"
                width={32}
            />
        </div>
    )
}
