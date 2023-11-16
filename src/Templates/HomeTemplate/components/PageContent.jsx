import { Outlet } from 'react-router-dom'
import Navigator from './Navigator'

export default function PageContent() {
    return (
        <div className='d-flex'>
            <Navigator />
            <Outlet />
        </div>
    )
}