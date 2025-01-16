import Link from 'next/link';


const SingupFooter = () => {
    return (
        <div className=" text-center text-sm text-gray-400 z-10 relative">
            <p className="encore-text encore-text-marginal" data-encore-id="text">
                This site is protected by reCAPTCHA and the{' '}
            </p>
            <p className="encore-text encore-text-marginal" data-encore-id="text">
                <Link
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 underline hover:text-white"
                >
                    Google Privacy Policy
                </Link>
                {' '}and{' '}
                <Link
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 underline hover:text-white"
                >
                    Terms of Service
                </Link>{' '}
                apply.
            </p>
        </div>
    );
};

export default SingupFooter;
