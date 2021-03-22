import styles from '../styles/components/SideBar.module.css';
import Link from 'next/link';
import {signOut } from 'next-auth/client';
import {FaHome} from 'react-icons/fa';
import {AiOutlineTrophy, AiOutlineLogout} from 'react-icons/ai';

export function SideBar(){

    return(
        <div className={styles.container}>
            
            <div className={styles.logo}>
                <img src='favicon.png' alt="Logo"/>
            </div>
            <Link href='/rankPage'>
                <a>
                    <button type="button">{<AiOutlineTrophy size={28} color="#5965E0" />}</button>
                </a>
            </Link>

            <Link href='/' >
                <a>
                    <button type="button">{<FaHome size={28} color="#5965E0"/>}</button>
                </a>
            </Link>
            <Link href='/loginPage' >
                <a>
                    <button type="button" onClick={() => signOut({ callbackUrl: 'http://localhost:3000/loginPage'})}> <AiOutlineLogout  size={28} color="#5965E0"/></button>
                </a>

            </Link>

        </div>
    )
}