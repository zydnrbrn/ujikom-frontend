import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import styles from '../styles/Home.module.css';

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className={styles.mainFont}>
                <h1 className='font-bold text-center'>Hello Sir !</h1>
                <h1 className='font-bold text-center'>This is my app !</h1>
            </div>
        </>
    )
}
