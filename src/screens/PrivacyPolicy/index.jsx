import React from 'react'

import { useGlobalContext } from '@/context/GlobalContext'
import translation from './translations'
import { PrivacyContainer } from './PrivacyPolicy.styled'
import Container from '@/components/Container'

const PrivacyPolicy = () => {
    const { language } = useGlobalContext()

    const t = (key) => {
        if (language === 'en') {
            return key
        } else {
            return translation[key] || key
        }
    }

    return (
        <Container>
            <PrivacyContainer>
                <h1>{t('Privacy Policy')}</h1>

                <div>
                    {' '}
                    <p>
                        {t(
                            'AZChain and its affiliates (hereinafter referred to as "azchain.io", "we") are committed to protecting and respecting your privacy.'
                        )}
                    </p>
                    <p>
                        {t(
                            'This Privacy Policy (together with our Terms and Conditions) governs the collection, processing, and use of your Personal Information. We define "Personal Information" as information that identifies you as an individual, such as your name, address, email address, occupation, etc.'
                        )}
                    </p>
                </div>

                <div>
                    <h2>{t('1. Purpose of the Privacy Policy')}</h2>
                    <ul>
                        <li>
                            {t(
                                'The types of personal information we may collect about you and how we use it;'
                            )}
                        </li>
                        <li>
                            {t(
                                'How we use information about your IP address and how we use cookies;'
                            )}
                        </li>
                        <li>
                            {t(
                                'Your rights and obligations when providing information to us;'
                            )}
                        </li>
                        <li>
                            {t(
                                'Commitment not to disclose any personal information to third parties;'
                            )}
                        </li>
                        <li>
                            {t(
                                'Ability to edit, update, and delete your personal information;'
                            )}
                        </li>
                        <li>
                            {t(
                                'And security measures to prevent loss, misuse, or alteration of the Personal Information we control.'
                            )}
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>
                        {t('2. Collection and Use of Personal Information')}
                    </h2>
                    <p>
                        {t(
                            'We may collect your Personal Information if you use our website, open an account to use the Platform, or perform any transactions on the Platform. The types of Personal Information we may collect include:'
                        )}
                    </p>
                    <ul>
                        <li>{t('Your full name;')}</li>
                        <li>{t('Your profile picture;')}</li>
                        <li>{t('Your address;')}</li>
                        <li>{t('Your phone number;')}</li>
                        <li>{t('Your email address;')}</li>
                        <li>
                            {t(
                                'Your bank information, including account number;'
                            )}
                        </li>
                        <li>{t('Your date of birth.')}</li>
                    </ul>
                    <p>
                        {t(
                            'We may use your Personal Information for the following purposes:'
                        )}
                    </p>
                    <ul>
                        <li>
                            {t(
                                'To allow you to open and operate an Account on the Platform;'
                            )}
                        </li>
                        <li>
                            {t(
                                'To enable you to complete transactions on the Platform;'
                            )}
                        </li>
                        <li>{t('To contact us for any inquiries;')}</li>
                        <li>
                            {t('To provide guidance on using our website;')}
                        </li>
                        <li>{t('As required for administrative purposes;')}</li>
                        <li>
                            {t(
                                'To provide you with information about products and promotions that may interest you from us and third parties, provided you have agreed to receive such information;'
                            )}
                        </li>
                        <li>
                            {t(
                                'For market research, such as surveys on user needs and opinions on issues like our performance, etc.'
                            )}
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>{t('3. Cookie')}</h2>
                    <p>
                        {t(
                            'We use a feature of your browser called "cookie" to assign a unique identifier to your computer. Cookies are usually stored on your computer\'s hard drive. We use the information collected from these cookie files to evaluate website performance, analyze trends, and manage the Platform. The information collected from cookies allows us to identify the most visited sections and pages on our website, as well as any difficulties users may encounter when accessing our website. With the data collected, we can enhance your user experience on the Platform by identifying and providing the most desired features and information, as well as addressing accessibility issues. We also use cookies and/or web beacons, often stored in emails, to help us confirm receipt and response to our emails and provide you with a more personalized experience when using our website.'
                        )}
                    </p>
                    <p>
                        {t(
                            "We use third-party service providers to better understand how users use our website. Our service providers will place cookies on your computer's hard drive and receive information we select to help us know which pages users access along with our website, products viewed, and general transaction information. Our service providers analyze this information and provide us with aggregate reports. The information and analysis provided by service providers are used to help us understand the benefits the website brings to users and how we can provide even more benefits to users. Information collected by service providers may be linked and combined with information we collect about you while using the Platform. Our service providers are contractually restricted in their use of the information they receive from the website. The identities of these service providers will be provided to you before you consent to allow us to use the cookie feature."
                        )}
                    </p>
                </div>

                <div>
                    <h2>
                        {t(
                            '4. Rights and Obligations When Providing Information to U'
                        )}
                    </h2>
                    <h3>{t('Your Rights')}</h3>
                    <ul>
                        <li>
                            {t(
                                'Right to be Informed: You have the right to be informed about how your personal data is processed. Upon your written request, we will inform you about the personal data we hold and how your personal data is used and disclosed. We will also provide you with a copy of the personal data we have stored. There may be a minimal fee for accessing your personal data.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Right to Consent: You have the right to consent or refuse the processing of your personal data. Silence or failure to respond will not be considered as consent.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Right to Access: You have the right to view and request corrections or request access to your personal data.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Right to Withdraw Consent: You have the right to withdraw consent for providing your information.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Right to Erase: You have the right to delete or request the deletion of your personal data.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Right to Restrict Processing: You have the right to request the restriction of processing your personal data.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Right to Data Portability: You have the right to request that we provide your personal data that you have previously provided to us.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Right to Object to Data Processing: You have the right to complain and object to the processing of your personal data, preventing or restricting its disclosure or use for advertising or marketing purposes of our products.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Right to Complain, Report, and Sue: You have the right to file complaints, report, or sue in accordance with the law if you discover that your personal data is used for purposes other than those you have authorized.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Right to Compensation for Damages: You have the right to request compensation for damages according to the law or agreement between parties if we violate personal data protection regulations.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Right to Self-Defense: You have the right to protect yourself according to the law.'
                            )}
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>
                        {t(
                            'You can exercise your rights by sending a request to us at support@azchain.io. The request will be processed within 72 hours from the time of the request.'
                        )}
                    </h3>
                    <h3>{t('Your Obligations')}</h3>
                    <ul>
                        <li>
                            {t(
                                'Protect your personal data; request that organizations and individuals involved protect your personal data.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Respect and protect the personal data of others.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Provide complete and accurate personal data when consenting to the processing of personal data.'
                            )}
                        </li>
                        <li>
                            {t(
                                'Comply with legal regulations on personal data protection.'
                            )}
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>{t('5. Disclosure of Personal Information')}</h2>
                    <p>
                        {t(
                            'We use personal information for the purposes notified at the time you provided it to us and/or for the purposes outlined in this Privacy Policy and/or as required by law.'
                        )}
                    </p>
                    <p>
                        {t(
                            'We are the sole organization that controls and processes your personal information. We may provide the personal information you provide to us to our affiliates, agents, representatives, trusted service providers, and contractors for these limited purposes with your prior consent.'
                        )}
                    </p>
                    <p>
                        {t(
                            'We may also share Users’ Personal Information with law enforcement or regulatory authorities as required by law.'
                        )}
                    </p>
                    <p>
                        {t(
                            'Any third parties who receive or have access to Personal Information must protect that information and only use it to perform the services they are providing to you or for azchain.io unless required or permitted by law.'
                        )}
                    </p>
                    <p>
                        {t(
                            'We ensure that these third parties will be notified of their obligations under this Privacy Policy. We will contract with such third parties to bind them to this Privacy Policy for any Personal Information disclosed to them.'
                        )}
                    </p>
                </div>

                <div>
                    <h2>{t('6. Security')}</h2>
                    <p>
                        {t(
                            'We have implemented security measures to ensure the safety of your personal information and protect it from loss, misuse, alteration, or deletion. Only authorized azchain.io employees have access to your personal information, and these employees are required to handle it as confidential information.'
                        )}
                    </p>
                </div>

                <div>
                    <h2>{t('7. Retention of Personal Information')}</h2>
                    <p>
                        {t(
                            'We will only retain your personal information for as long as necessary for us to fulfill the purposes described in this Privacy Policy and our legal and regulatory requirements. As part of our record-keeping commitment, we will retain Accounts and Personal Information for at least 5 years after a User closes their account.'
                        )}
                    </p>
                </div>

                <div>
                    <h2>{t('8. Accounts Payable')}</h2>
                    <p>
                        {t(
                            'There may be other unforeseen or unidentified risks in these Terms of Use.'
                        )}
                    </p>
                </div>

                <div>
                    <h2>{t('9. Marketing')}</h2>
                    <p>
                        {t(
                            'You have the right to request that we do not process your personal information for marketing purposes. You may exercise this right by checking certain information on the forms we use to collect your personal information. You may exercise this right at any time by contacting us at support@azchain.io.'
                        )}
                    </p>
                </div>

                <div>
                    <h2>{t('10. Data Processing Start and End Time')}</h2>
                    <p>
                        {t(
                            'Your data will begin processing from the moment you complete the submission of information on our platform and will end when your account closure request is processed. Throughout the time you maintain an account on our platform, your information will be processed and used for the purposes outlined above, as well as to enhance security and protect your assets.'
                        )}
                    </p>
                </div>

                <div>
                    <h2>{t('11. Changes')}</h2>
                    <p>
                        {t(
                            "Policies, content, information, promotions, disclosures, disclaimers, and features of our website may be modified, supplemented, updated, and/or changed at any time without prior notice at azchain.io's sole and absolute discretion. If we make changes to this Privacy Policy, we will take steps to notify all users through a notice on our website and will publish the revised Privacy Policy on the website."
                        )}
                    </p>
                </div>

                <div>
                    <h2>{t('12. Contact Us')}</h2>
                    <p>
                        {t(
                            'If you have any questions, comments, or concerns related to the Privacy Policy and/or our activities related to the Platform, please contact us at the following email address: Email: support@azchain.io.'
                        )}
                    </p>
                </div>
            </PrivacyContainer>
        </Container>
    )
}

export default PrivacyPolicy
