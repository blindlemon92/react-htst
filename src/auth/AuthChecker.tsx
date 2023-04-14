import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, Providers } from '../config/firebase'
import { signInWithPopup } from '@firebase/auth';

interface Props {
    children: React.ReactNode;

};

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth.currentUser) {
            navigate("../")
            signInWithPopup(auth, Providers.google)
        }
    }, [])
  return (
    <>{children}</>
  )
}

export default AuthChecker
