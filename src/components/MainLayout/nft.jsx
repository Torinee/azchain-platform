import WhiteLayout from '@/components/WhiteLayout'
import WhiteHome from '@/screens/WhiteHome'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    const lang = router.query.lang || 'en'

    return (
        <WhiteLayout language={lang}>
            <Head>
                <title>
                    {lang === 'en'
                        ? 'AZChain - Revolutionary and Sustainable Blockchain Ecosystem'
                        : 'AZChain - Hệ Sinh Thái Blockchain Đột Phá và Bền Vững'}
                </title>
                <meta
                    name='description'
                    content={
                        lang === 'en'
                            ? 'AZChain bridges blockchain technology with real-world assets, offering a secure, transparent, and efficient platform. With $AZC and AZGPay Wallet, we unlock new investment opportunities in real estate, agriculture, and decentralized e-commerce.'
                            : 'AZChain kết nối công nghệ blockchain với tài sản thực, mang đến nền tảng an toàn, minh bạch và hiệu quả. Với $AZC và Ví AZGPay, chúng tôi mở ra cơ hội đầu tư mới trong các lĩnh vực bất động sản, nông nghiệp, và thương mại điện tử phi tập trung.'
                    }
                />
            </Head>
            <WhiteHome />
        </WhiteLayout>
    )
}
