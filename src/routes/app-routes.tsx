import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRouterGuard from '../guards/protected-routes'
import HomeView from '../modules/home/view/home-view'
import AuthView from '../modules/auth/view/auth-view'
import AuthRouterGuard from '../guards/auth-router'
import { MainLayout } from '../layouts/main-layout'
import { AuthLayout } from '../layouts/auth-layout'
import MainDashboardComponent from '../modules/dashboard/components/main-dashboard'
import SettingsComponent from '../modules/settings/components/settings-component'
import NewDebateComponent from '../modules/new-debate/components/main-new-debate-component'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRouterGuard />}>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<HomeView />} />
                        <Route path='/votacion' element={<div>Hola mundo</div>} />
                        <Route path='/dashboard' element={<MainDashboardComponent />} />
                        <Route path='/settings' element={<SettingsComponent />} />
                        <Route path='/new-debate' element={<NewDebateComponent />} />
                    </Route>
                </Route>

                <Route element={<AuthLayout />}>
                    <Route element={<AuthRouterGuard />}>
                        <Route path='/auth' element={<AuthView />} />
                    </Route>
                </Route>

                <Route path='/404' element={<h1>error</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
