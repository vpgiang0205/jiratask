import { Outlet } from 'react-router-dom'
import Navigator from './Navigator'

export default function PageContent() {
    return (
        <div className='d-md-flex'>
            <div className='col-md-2'>
                <Navigator />
            </div>

            <div className='col-md-10'>
                <Outlet />
            </div>
        </div>
    )
}